<template>
  <div v-if="!loading">
    <NavBar />
     <v-img 
      :src="getImageName(attraction.data.attributes['Banner'].data[0].attributes['url'])"
       > 
      </v-img>
      <h1>{{attraction.data.attributes['Title']}}</h1>
      <p>{{attraction.data.attributes['Description']}}</p>
      <h2>Tudta-e ?</h2>
      <p>{{attraction.data.attributes['Did_you_know']}}</p>
    <GoogleMaps />
    <FooterElement />
  </div>
</template>

<script>
import { singleAttractionQuery } from '~/graphql/query'

export default {
  data() {
      return {
        loading: 0,
        attraction:[]
     }
   },
  apollo: {
    $loadingKey: 'loading',
      attraction: {
          prefetch: true,
          query: singleAttractionQuery,
          variables() {
            return {
            id: `${this.$route.params.id}`
            }
          },
          fetchPolicy: 'network-only'
      }
   },
  methods: {
    getImageName(imageUrl) {
      return require(`~/assets/${imageUrl.split("/").pop()}`)
     }
  }
}

</script>

<style scoped>
body{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#__nuxt{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#__layout{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#__layout > div{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.v-image{
 max-height: 400px;
}

h1{
  font-size: 40px;
  text-align: center;
}

h2{
  font-size: 30px;
  text-align: center;
}
</style>