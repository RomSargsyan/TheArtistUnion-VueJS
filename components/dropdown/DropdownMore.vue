<template>
  <ul class="dropdown-menu-item">
    <li>
      <nuxt-link title="Artists" aria-label="Artists" to="/artists">
        Artists
      </nuxt-link>
    </li>
    <li class="divider" />
    <li>
      <nuxt-link title="About" aria-label="About" to="/about">
        About
      </nuxt-link>
    </li>
    <li>
      <nuxt-link title="FAQ" aria-label="FAQ" to="/faq">
        FAQ
      </nuxt-link>
    </li>
    <li>
      <nuxt-link title="DMCA" aria-label="DMCA" to="/dmca">
        DMCA
      </nuxt-link>
    </li>
    <li>
      <nuxt-link title="Terms & privacy" aria-label="Terms & privacy" to="/terms">
        Terms & privacy
      </nuxt-link>
    </li>
    <li v-b-modal.modal-keyboard>
      <a href="#" title="Keyboard shortcuts" aria-label="Keyboard shortcuts">
        Keyboard shortcuts
      </a>
    </li>
    <li class="divider" />
    <li>
      <nuxt-link title="SoundCloud" aria-label="SoundCloud" to="/charts/tracks">
        <i class="fa fa-soundcloud social-icon"></i>
        SoundCloud
      </nuxt-link>
    </li>
    <li>
      <nuxt-link title="Twitter" aria-label="Twitter" to="/charts/tracks">
        <i class="fa fa-twitter fa-lg social-icon"></i>
        Twitter
      </nuxt-link>
    </li>
    <li>
      <nuxt-link title="Facebook" aria-label="Facebook" to="/charts/tracks">
        <i class="fa fa-facebook-square fa-lg social-icon"></i>
        Facebook
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>
