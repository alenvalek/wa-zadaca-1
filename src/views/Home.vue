<template>
	<v-container>
		<div class="text-h1 mb-5 text-center">Vue.js commit history</div>
		<commit-card
			v-for="commit in commits"
			:key="commit.sha"
			:id="commit.sha"
			:detalji="commit.commit.message"
		/>
	</v-container>
</template>

<script>
import CommitCard from "@/components/CommitCard";
import axios from "axios";

export default {
	name: "Home",
	async mounted() {
		console.log("Commit state: ", this.commits);
		const res = await axios.get(
			"https://api.github.com/repos/vuejs/vue/commits",
			{
				params: {
					per_page: 10,
				},
			}
		);
		console.log(res.data);
		this.commits = res.data;
	},
	data() {
		return {
			commits: [],
		};
	},
	components: {
		CommitCard,
	},
};
</script>
