<template>
<div>
     <v-skeleton-loader
      width="344"
      type="card"
    >
    </v-skeleton-loader>
<v-card
    max-width="344"
  >
  <nuxt-link :to="`/${id}`">
    <v-img 
      :src="getImageName(imageUrl)"
      height="200px"
    ></v-img>
 </nuxt-link>
    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{description.substring(0,80)+'...'}}
    </v-card-subtitle>

      <!--   <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Olvass többet
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         {{description}}
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
</div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    imageUrl: {
      type: String,
      default: ''
    }
  },
    data: () => ({
    show: false,
  }),
  methods: {
     getImageName(imageUrl)  {
      return require(`~/static/${imageUrl.split("/").pop()}`)
    }
  },
  mounted() {
    this.$el.querySelector('.v-skeleton-loader__card').style.display='none'
    this.$el.querySelector('.v-card').style.display='flex'
  }
}
</script>

<style scoped>
.v-card{
  display: none;
  flex-direction: column;
}
</style>