<template>
<div>
  <AttractionElement
      v-for="attraction in attractions"
      :key="attraction.id"
      :id="attraction.id"
      :imageUrl="attraction.Banner[0]['url']"
      :title="attraction.Title"
    />
</div>
</template>

<script>
import AttractionElement from '../components/AttractionElement'
import { attractionQuery } from '~/graphql/query'

export default {
  name: 'AttractionList',
  components: {
    AttractionElement
  },
  data() {
      return {
          attractions:[],
     }
   },
  apollo: {
      attractions: {
          prefetch: true,
          query: attractionQuery,
      }
   }
}
</script>

<style scoped>

</style>