<template>
	<v-container column v-if="commit && !loading">
		<v-card>
			<v-card-title>
				Commit <strong> [{{ shaID }}] </strong>
			</v-card-title>
			<div class="mx-5 my-5">
				<div class="text-h6">
					<strong>Datum:</strong>
					{{ new Date(commit.commit.author.date).toDateString() }}
				</div>
				<div class="text-h6">
					<strong>Ime autora:</strong> {{ commit.commit.author.name }}
				</div>
				<div class="text-h6">
					<strong>Email:</strong> {{ commit.commit.author.email }}
				</div>
				<div class="text-h6">
					<strong>Commit message:</strong> {{ commit.commit.message }}
				</div>
			</div>
			<v-card-actions>
				<v-btn class="ml-auto mx-5" color="error" @click="returnHome"
					>&times;</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-container>
	<v-container column v-else-if="commit && loading">
		<div class="text-h5 text-center">Loading..</div>
	</v-container>
	<v-container column v-else>
		<div class="text-h5 text-center">Commit not found..</div>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	name: "DetailCommit",
	async mounted() {
		const res = await axios.get(
			`https://api.github.com/repos/vuejs/vue/commits/${this.shaID}`
		);
		console.log(res.data);
		this.commit = res.data;
		this.loading = false;
	},
	data() {
		return {
			shaID: this.$route.params.shaID,
			loading: true,
			commit: null,
		};
	},
	methods: {
		returnHome() {
			this.$router.replace({ name: "Home" });
		},
	},
};
</script>
