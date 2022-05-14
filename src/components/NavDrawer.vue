<template>
    <v-navigation-drawer permanent width="300" color="primary">
        <v-list bg-color="primary">
            <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="{name: item.title}"
            >
            <v-list-item-icon>
                {{ item.icon}}
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.nav-drawer {
  background-color: #112123;
  color: white;
}
</style>

<script lang="ts">
    export default {
        name: 'NavDrawer',
        data () {
            return {
                items: [
                    { title: 'Home', icon: 'mdi-home' },
                    { title: 'About', icon: 'mdi-information' },
                ],
                right: null,
            }
        }
    }
</script>