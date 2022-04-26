<template>
  <div>
    <NavBar />
      <v-img 
      :src="getImageName(attraction['Banner'][0]['url'])"
       ></v-img>
      <h1>{{attraction['Title']}}</h1>
      <p>{{attraction['Description']}}</p>
      <h2>Tudta-e ?</h2>
      <p>{{attraction['Did_you_know']}}</p>
    <GoogleMaps />
    <FooterElement />
  </div>
</template>

<script>
// import { singleAttractionQuery } from '~/graphql/query'
import gql from 'graphql-tag';
import FooterElement from '../components/FooterElement.vue';

export const singleAttractionQuery = gql`
query singleAttractionQuery {
	attraction(id: "2") {
		id,
		  Title,
		  Description,
		Banner{    
		  id
		  width
		  height
		  url
		},
		  Did_you_know,
		  Latitude
		  Longitude
	}
}
`

export default {
  components: { FooterElement },
  data() {
      return {
          attraction:[],
     }
   },
  apollo: {
      attraction: {
          prefetch: true,
          query: singleAttractionQuery
      }
   },
  methods: {
     getImageName(imageUrl)  {
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