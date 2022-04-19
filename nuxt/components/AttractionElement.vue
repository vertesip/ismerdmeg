<template>
  <div>
      <img :src="getImageName(imageUrl)">
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    imageUrl: {
      type: String,
      default: ''
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
</style>