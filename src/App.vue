<template>
	<Navbar @showAuthBox="showAuthBox"></Navbar>
	<div class="modalOverlay" v-if="showModal">
		<Account @hideAuthBox="hideAuthBox"></Account>
	</div>

	<router-view />
</template>
<script>
import Account from './views/Account';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import { ref } from '@vue/reactivity';
export default {
	components: {
		Account,
		SignIn,
		Navbar,
	},

	setup() {
		let showModal = ref(false);
		let showAuthBox = () => {
			showModal.value = !showModal.value;
		};
		let hideAuthBox = () => {
			showModal.value = !showModal.value;
		};
		return { showModal, showAuthBox, hideAuthBox };
	},
};
</script>

<style>
/* #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
} */
</style>
