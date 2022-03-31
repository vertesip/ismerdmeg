<template>
<div>
  <div v-for="message in messages" v-bind:key="message.id">
    {{message.greetings}}
  </div>
</div>
</template>

<script>
import {messageQuery} from '~/graphql/query'

export default {
  name: 'IndexPage',
    data() {
    return {
      messages:[],
    }
  },
  apollo: {
    messages: {
      prefetch: true,
      query: messageQuery,
    }
  }
}
</script>