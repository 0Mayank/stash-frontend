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

<style>
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
