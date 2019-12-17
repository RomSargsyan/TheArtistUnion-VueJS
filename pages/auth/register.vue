<template>
<div class="container" id="app">
	<div class="col-md-6 offset-md-3">
		<h1 class="mt-2 text-center">REGISTER</h1>
		<div class="card">
			<div class="card-body">
				<form @submit.prevent="register">
					<div class="form-group">
						<label>Name</label>
						<input
							v-model="form.name"
							type="text"
							class="form-control"
							placeholder="Name">
					</div>
					<div class="form-group">
						<label>Email</label>
						<input
							v-model="form.email"
							type="email" class="form-control"
							placeholder="Email">
					</div>
					<div class="form-group">
						<label>Password</label>
						<input
							v-model="form.password"
							type="password"
							class="form-control"
							placeholder="Password">
					</div>
					<div class="form-group">
						<label>Password Confirmation</label>
						<input
							v-model="form.password_confirmation"
							type="password" class="form-control"
							placeholder="Same Password">
					</div>
					<div class="form-group">
						<button aria-label="register" type="submit" class="btn btn-default w-100">
							<strong>Register</strong>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name:'',
				email:'',
				password:'',
				password_confirmation:''
			},
		}
	},
	methods: {
		async register() {
    }
	}
}
</script>
