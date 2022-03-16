<template>
	<v-container>
		<v-card :elevation="2">
			<v-card-title>Commit: 23121234</v-card-title>
			<v-card-text>Description</v-card-text>
			<v-card-actions>
				<v-btn class="ml-auto" :elevation="2" raised color="primary"
					>Detalji</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: "CommitCard",
	props: {
		id: String,
		detalji: String,
	},
};
</script>

<style></style>
