<script setup lang="ts"></script>

<template>
	<div className="item-container">
		<div className="item">
			<div id="img"></div>
			<img
				id="icon"
				src="https://cdn.discordapp.com/emojis/921067306363289640.webp?size=128&quality=lossless"
			/>
			<div id="title">Blon</div>
		</div>
		<div className="item">
			<div id="img"></div>
			<img
				id="icon"
				src="https://cdn.discordapp.com/emojis/921067306363289640.webp?size=128&quality=lossless"
			/>
			<div id="title">Blon</div>
		</div>
		<div className="item">
			<div id="img"></div>
			<img
				id="icon"
				src="https://cdn.discordapp.com/emojis/921067306363289640.webp?size=128&quality=lossless"
			/>
			<div id="title">Blon</div>
		</div>
	</div>
</template>

<style scoped>
/* Flex box for all the cards */

#title {
	font-family: sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 25px;
	/* line-height: 29px; */
	color: white;
}
#icon {
	position: relative;
	width: 65px;
	height: 65px;
	left: 15px;
	bottom: 30px;
	border-radius: 20px;
	object-fit: contain;
	background-color: #112123;
	/* padding: .25rem; */
}
.item-container {
	overflow: hid;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 20px 30px;
}
/* Card css */
.item {
	width: 350px;
	height: 350px;
	background: #112123;
	border-radius: 20px;
	/* padding: .5rem; */
}
/* Image on the card */
#img {
	/* position: absolute; */
	height: 12rem;
	left: 1.15%;
	right: -1.38%;
	top: -1px;

	background: url(https://media.discordapp.net/attachments/747692657131651175/973511976665899028/20220510_043136.jpg);
	filter: blur(1px);
	border-radius: 20px;
	/* overflow: hidden; */
}
</style>
