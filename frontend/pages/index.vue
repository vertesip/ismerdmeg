<template>
  <div>
    <NavBar />
    <GoogleMaps />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import GoogleMaps from '../components/GoogleMaps'

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    GoogleMaps
  }
}
</script>