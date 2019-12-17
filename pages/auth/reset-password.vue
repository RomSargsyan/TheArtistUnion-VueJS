<template>
  <div class="container" id="app">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">Reset Password</div>
          <div class="card-body">
            <form @submit.prevent="resetPassword">
              <div class="form-group">
                <label for="email">E-mail</label>
                <input
                  v-model="form.email"
                  type="email" id="email"
                  class="form-control"
                  placeholder="E-mail">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Password">
              </div>
              <div class="form-group">
                <label for="password_confirmation">Password Confirmation</label>
                <input
                  v-model="form.password_confirmation"
                  type="password"
                  id="password_confirmation"
                  class="form-control"
                  placeholder="Password Confirmation">
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
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods: {
    async resetPassword(){
    },
  }
}
</script>
