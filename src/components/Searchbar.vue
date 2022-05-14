<script setup lang="ts"></script>

<template>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
	<form className="flex-container">
		<input className="input" placeholder="Search" />
		<button className="submit"><i class="fa fa-search"></i></button>
	</form>
</template>

<style scoped>
.flex-container {
	display: flex;
	margin-top: 1rem;
	margin-bottom: 1rem;
	width: 30%;
	outline: none;
	border: none;
}

.input {
	font-size: 1rem;
	border: none;
	flex: 15;
	background: #111D2C;
	color: white;
	border-top-left-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;
	margin: 0;
	outline: none;
	padding-left: 1rem;
}

.submit {
	outline: none;
	flex: 1;
	background: #111D2C;
	padding: 1rem;
	color: white;
	border-top-right-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	border: none;
	border-left: 1px solid #113536;
}
</style>
