<template>
    <v-navigation-drawer permanent width="300" color="primary" floating>
        <v-list bg-color="primary" nav>
            
            <v-list-item
            class="font-weight-bold"
            v-for="item in items"
            :key="item.title"
            :to="{name: item.title}"
            v-slot="{isActive}"
            active-color="accent"
            variant="plain"
            :prepend-icon="item.icon"
            :title="item.title"
            >
                <v-sheet rounded class="bar" :class="[isActive && 'bar-active']"/>
            </v-list-item>
        
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.bar {
    margin-left: -15px;
    margin-top: -15px;
    margin-bottom: -15px;
    width: 4px;
    height: 30px;
    background-color: rgb(var(--v-theme-primary));
}

.bar-active {
    background-color: rgb(var(--v-theme-accent));
}
</style>

<script lang="ts">
    export default {
        name: 'NavDrawer',
        data () {
            return {
                items: [
                    { title: 'Home', icon: 'mdi-home-roof' },
                    { title: 'About', icon: 'mdi-information-variant' },
                ],
                right: null,
            }
        }
    }
</script>