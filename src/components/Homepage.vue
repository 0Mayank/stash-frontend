<template>
	<v-container class>
		
		<Searchbar />
		
		<v-row align-items="right">
				<!-- v-col might have a bug so not using rn -->
				<Card class="ma-3" v-for="_ in 7" :key="card-_"
					bg="https://media.discordapp.net/attachments/747692657131651175/973511976665899028/20220510_043136.jpg" 
					icon="https://cdn.discordapp.com/emojis/921067306363289640.webp?size=128&quality=lossless"
					title="Blon"
					last_played="3/6/23"
					last_saved="3/6/23"
					/>
			
		</v-row>
	</v-container>
</template>

<style scoped>
</style>

<script lang="ts">
import Card from "@/components/Card.vue";
import Searchbar from "@/components/Searchbar.vue";

export default ({
  name: 'Homepage',

  data () {
    return {
      
    }
  },
  components: {
    Card,
    Searchbar
  }
})

</script>