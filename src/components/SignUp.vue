<template>
	<!-- <div class="modalOverlay"> -->
	<!-- <h2>WElcome</h2> -->

	<div class="signContainer">
		<!-- <i class="fa-solid fa-circle-xmark" @click="hideModal"></i> -->
		<h3>Sign Up</h3>
		<form @submit.prevent="">
			<!-- form -->
			<div class="form-item">
				<input type="text" v-model="name" placeholder="Name" />
			</div>
			<div class="form-item">
				<input type="text" v-model="email" placeholder="Email" />
			</div>
			<div class="form-item">
				<div v-if="click" class="eyeContainer">
					<input type="text" placeholder="Password" v-model="password" />
					<i class="fa-regular fa-eye" @click="showPass"></i>
				</div>
				<div v-else class="eyeContainer">
					<input type="password" placeholder="Password" v-model="password" />
					<i class="fa-regular fa-eye-slash" @click="showPass"></i>
				</div>
			</div>
			<div class="form-item">
				<button>Sign Up</button>
			</div>
			<div class="form-item btn2">
				<button @click="changeModal">Already Have An Account</button>
			</div>

			<!-- end of form -->
		</form>
	</div>
	<!-- </div> -->
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
	setup(props, context) {
		let password = ref('');
		let email = ref('');
		let name = ref('');
		let click = ref(false);
		let showPass = () => {
			click.value = !click.value;
		};

		let changeModal = () => {
			context.emit('changeAuthBox');
		};

		return {
			name,
			password,
			email,
			click,
			showPass,
			changeModal,
		};
	},
};
</script>

<style></style>
