<template>
  <v-app>

    <NavDrawer />

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import NavDrawer from '@/components/NavDrawer.vue'

export default ({
  name: 'App',
  components: {
    NavDrawer
  },
  data () {
    return {}
  },
})
</script>
