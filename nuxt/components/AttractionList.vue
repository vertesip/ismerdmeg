<template>
<section>
  <AttractionElement
      v-for="attraction in attractions"
      :key="attraction.id"
      :id="attraction.id"
      :imageUrl="attraction.Banner[0]['url']"
      :title="attraction.Title"
      :description="attraction.Description"
    />
</section>
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
section{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 10px;
  gap: 30px;
}
</style>