<template>
  <div class="container" id="app">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">Forgot Password</div>
          <div class="card-body">
      			<form @submit.prevent="requestResetPassword">
      				<div class="form-group">
      					<label>Email</label>
      					<input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="Email">
      				</div>
      				<div class="form-group">
      					<button type="submit" class="btn btn-default w-100">
                  Send Password Reset Link
                </button>
      				</div>
      			</form>
          </div>
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
				email: ''
		  },
		}
  },
	methods: {
		async requestResetPassword(){
	  },
	},
}
</script>
