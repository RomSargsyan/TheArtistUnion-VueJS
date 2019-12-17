<template>
	<div class="container" id="app">
		<div class="col-md-6 offset-md-3">
			<h1 class="text-center">LOGIN</h1>
			<div class="card">
				<div class="card-body">
					<form @submit.prevent="login">
						<div class="form-group">
							<label>Email</label>
							<input
								v-model="form.email"
								type="email"
								class="form-control"
								placeholder="Email">
						</div>
						<div class="form-group">
							<label>Password</label>
							<input
								v-model="form.password"
								type="password" class="form-control"
								placeholder="Password">
						</div>
						<div class="form-group">
							<button aria-label="login" type="submit" class="btn btn-default w-100">
								<strong>Login</strong>
							</button>
						</div>
						<div class="text-center">
							<p>
								Don't have an account?
								<nuxt-link to="/auth/register" title="sign up" aria-label="sign up">
									Sign up
								</nuxt-link>
							</p>
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
				email: '',
				password: '',
			},
		}
	},
	methods: {
		async login() {

		},
  },
}
</script>
