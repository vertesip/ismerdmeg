<template>
<section>
  <ais-instant-search :search-client="searchClient" index-name="attraction">
    <ais-search-box />
    <ais-hits>
      <div slot="item" slot-scope="{ item }">
       <AttractionElement
          :id="getId(item.id)"
          :imageUrl="item.Banner[0].formats.thumbnail.url"
          :title="item.Title"
          :description="item.Description"
         />
      </div>
    </ais-hits>
  </ais-instant-search>
</section>
</template>

<script>
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
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
          searchClient: instantMeiliSearch(
          "http://localhost:7700" || "http://159.223.229.231:7700"
      ),
     }
   },
  apollo: {
      attractions: {
          prefetch: false,
          query: attractionQuery,
      }
   },
   methods: {
     getId(meiliID){
        const extractedId = meiliID.replace( /^\D+/g, '');
        return extractedId;
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