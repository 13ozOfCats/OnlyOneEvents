import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '@/views/about/index.vue'),
	},
	{
		path: '/works',
		name: 'Works',
		component: () => import(/* webpackChunkName: "works" */ '@/views/works/index.vue'),
	},
	{
		path: '/works/:slug',
		name: 'Work',
		component: () => import(/* webpackChunkName: "works" */ '@/views/work/index.vue'),
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: () => import(/* webpackChunkName: "contacts" */ '@/views/contacts/index.vue'),
	},
];

const router = new VueRouter({
	routes
});

export default router;

