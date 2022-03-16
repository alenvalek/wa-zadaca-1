<template>
	<v-app class="colorBack">
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({
		//
	}),
};
</script>
<style>
.colorBack {
	background-color: #b8c6db !important;
	background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%) !important;
}
</style>
