<template>
	<v-container>
		<commit-card />
	</v-container>
</template>

<script>
import CommitCard from "@/components/CommitCard";
export default {
	name: "Home",
	mounted() {
		console.log("Commit state: ", this.commits);
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
