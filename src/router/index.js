import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Shop from '../views/Shop.vue';
import Blog from '../views/Blog.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Cart from '../views/Cart.vue';
import Account from '../views/Account.vue';
import lostPassword from '../views/lostPassword.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/shop',
		name: 'shop',
		component: Shop,
	},
	{
		path: '/blog',
		name: 'blog',
		component: Blog,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact,
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart,
	},
	{
		path: '/account',
		name: 'account',
		component: Account,
	},
	{
		path: '/account/lostpassword',
		name: 'lostpassword',
		component: lostPassword,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
