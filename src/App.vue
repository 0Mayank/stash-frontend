<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Sidebar from "./components/Sidebar.vue";
import Cards from "./components/Cards.vue";
import Searchbar from "./components/Searchbar.vue";
</script>

<template>
	<div className="main-container">
		<div className="sidebar-container">
			<Sidebar />
		</div>
		<div className="cards-container">
			<Searchbar />
			<Cards />
		</div>
	</div>
</template>

<style scoped>
.main-container {
	display: flex;
	background-color: #113536;
	gap: 23px;
	/* min-height: auto; */
}
.sidebar-container {
	flex: 1;
	background-color: #112123;
}
.cards-container {
	flex: 3.5;
}
</style>

<style>
body,
html,
#app {
	/* height: 100%; */
	/* min-height: 1000px; */
	margin: 0;
	background-color: red;
}
</style>
