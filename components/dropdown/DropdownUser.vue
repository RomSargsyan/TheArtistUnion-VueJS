<template>
  <ul class="dropdown-menu-item">
    <li>
      <nuxt-link to="/dashboard">
        Dashboard
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/">
        Public profile
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/dashboard/account">
        Account
      </nuxt-link>
    </li>
    <li @click.prevent="signOut">
      <nuxt-link title="signout" aria-label="singout" to="#">
        Log out
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
	methods: {
	    signOut() {
	      this.$auth.logout()
	    }
    }
}
</script>
