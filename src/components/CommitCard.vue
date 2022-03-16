<template>
	<v-container>
		<v-card :elevation="2">
			<v-card-title> Commit: {{ id }} </v-card-title>
			<v-card-text> {{ detalji }} </v-card-text>
			<v-card-actions>
				<router-link
					class="ml-auto"
					:to="{ name: 'DetailCommit', params: { shaID: id } }"
				>
					<v-btn :elevation="2" raised color="primary">Detalji</v-btn>
				</router-link>
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
