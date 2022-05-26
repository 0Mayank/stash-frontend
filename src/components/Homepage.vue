<template>
	<v-container class>
		
		<Searchbar />
		
		<v-row align-items="right">
			<!-- v-col might have a bug so not using rn -->
			<Card class="ma-3"
				bg="https://thumbnails.pcgamingwiki.com/7/7c/Elden_Ring_-_cover.jpg/300px-Elden_Ring_-_cover.jpg" 
				icon="https://styles.redditmedia.com/t5_122hf1/styles/communityIcon_h04bgma6k1p81.png"
				title="Elden Ring"
				last_played="3/6/23"
				last_saved="3/6/23"
				/>

			<Card class="ma-3"
				bg="https://thumbnails.pcgamingwiki.com/c/c0/Hollow_Knight_cover.jpg/300px-Hollow_Knight_cover.jpg" 
				icon="https://styles.redditmedia.com/t5_122hf1/styles/communityIcon_h04bgma6k1p81.png"
				title="Hollow Knight"
				last_played="3/6/23"
				last_saved="3/6/23"
				/>

			<Card class="ma-3"
				bg="https://thumbnails.pcgamingwiki.com/3/39/Cyberpunk_2077_cover.png/300px-Cyberpunk_2077_cover.png" 
				icon="https://styles.redditmedia.com/t5_122hf1/styles/communityIcon_h04bgma6k1p81.png"
				title="Cyberpunk 2077"
				last_played="3/6/23"
				last_saved="3/6/23"
				/>

			<Card class="ma-3"
				bg="https://thumbnails.pcgamingwiki.com/f/f1/Hitman_III_cover.jpg/300px-Hitman_III_cover.jpg" 
				icon="https://styles.redditmedia.com/t5_122hf1/styles/communityIcon_h04bgma6k1p81.png"
				title="Hitman III"
				last_played="3/6/23"
				last_saved="3/6/23"
				/>

			<Card class="ma-3"
				bg="https://thumbnails.pcgamingwiki.com/7/72/Nier_Automata_cover.jpg/300px-Nier_Automata_cover.jpg" 
				icon="https://styles.redditmedia.com/t5_122hf1/styles/communityIcon_h04bgma6k1p81.png"
				title="NieR: Automata"
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