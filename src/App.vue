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
.expand-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.expand-active,
.expand-leave-active {
  transition: all 0.2s ease-in;
}

.expand-leave-to {
  transform: translateY(+10px);
  opacity: 0;
}
</style>
