import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DetailCommit from "../views/DetailCommit.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/:shaID",
		name: "DetailCommit",
		component: DetailCommit,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
