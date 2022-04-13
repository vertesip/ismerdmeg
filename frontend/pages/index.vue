<template>
  <div>
    <NavBar />
    <GoogleMaps />
    <FooterElement />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import GoogleMaps from '../components/GoogleMaps'
import FooterElement from '../components/FooterElement'

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    GoogleMaps,
    FooterElement
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
</style>