<template>
	<!-- <div class="navbar"> -->
	<section id="header">
		<router-link :to="{ name: 'home' }"
			><img src="../assets/icon/cake1.png" alt="Logo"
		/></router-link>
		<div>
			<ul id="navbar">
				<li>
					<router-link :to="{ name: 'home' }">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'shop' }">Shop</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'blog' }">Blog</router-link>
					<!-- <a href="">Blog</a> -->
				</li>
				<li>
					<router-link :to="{ name: 'about' }">About</router-link>
					<!-- <a href="">About</a> -->
				</li>
				<li>
					<router-link :to="{ name: 'contact' }">Contact</router-link>
					<!-- <a href="">Contact</a> -->
				</li>

				<!-- <li>
					<router-link :to="{ name: 'home' }"
						><span class="material-symbols-outlined"> local_mall </span>
					</router-link>
				</li>

				<li>
					<router-link :to="{ name: 'home' }">
						<span class="material-symbols-outlined"> person </span>
					</router-link>
				</li> -->
			</ul>
		</div>
		<div id="navIcon">
			<router-link :to="{ name: 'cart' }"
				><span class="material-symbols-outlined"> local_mall </span>
			</router-link>

			<!-- <span class="material-symbols-outlined person" @click="showModal"> person </span> -->

			<router-link to="" @click="showModal">
				<span class="material-symbols-outlined"> person </span>
			</router-link>

			<!-- <button @click=""><span class="material-symbols-outlined"> person </span></button> -->
		</div>

		<!-- <div>
			<ul class="navbarIcon">
				<li>
					<router-link :to="{ name: 'home' }"
						><span class="material-symbols-outlined"> local_mall </span>
					</router-link>
				</li>

				<li>
					<router-link :to="{ name: 'home' }">
						<span class="material-symbols-outlined"> person </span>
					</router-link>
				</li>
			</ul>
		</div> -->
	</section>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
	setup(props, context) {
		let showModal = () => {
			context.emit('showAuthBox');
		};
		return { showModal };
	},
};
</script>

<style></style>
