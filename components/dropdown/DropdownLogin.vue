<template>
  <ul class="dropdown-arrow-right dropdown-menu-item">
    <li class="dropdown-header">Connect with:</li>
    <li>
      <a @click.prevent="loginWithInstagram" :href="`${apiRoot}/auth/instagram`" title="Log in with instagram" aria-label="instagram">
        <i class="fa fa-instagram fa-fw fa-lg"></i>
        Instagram
      </a>
    </li>
    <li>
      <a @click.prevent="loginWithFacebook" :href="`${apiRoot}/auth/facebook`" title="Log in with Facebook" aria-label="Facebook">
        <i class="fa fa-facebook-square fa-fw fa-lg"></i>
        Facebook
      </a>
    </li>
    <li>
      <a @click.prevent="loginWithLinkedin" :href="`${apiRoot}/auth/linkedin`" title="Log in with Linkdin">
        <i class="fa fa-linkedin-square fa-fw fa-lg"></i>
        Linkdin
      </a>
    </li>
    <li>
      <nuxt-link to="/auth/login" title="Email" aria-label="email">
        <i class="fa fa-at fa-fw fa-lg"></i>
        Email
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      apiRoot: process.env.API_URL,
    };
  },
  methods: {
    loginWithInstagram() {
      window.open(`${this.apiRoot}/auth/instagram`, '_blank', "width=500, height=500");
    },
    loginWithFacebook() {
      window.open(`${this.apiRoot}/auth/facebook`, '_blank', "width=500, height=500");
    },
    loginWithLinkedin() {
      window.open(`${this.apiRoot}/auth/linkedin`, '_blank', "width=500, height=500");
    }
  }
}
</script>
