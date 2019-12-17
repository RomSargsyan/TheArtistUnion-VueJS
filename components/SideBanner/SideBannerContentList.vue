<template>
  <article class="content-list track-fans">
    <section class="content-list-header row">
      <h3 class="content-list-header-title col-sm-6 p-0 text-right">
        Top supporters
      </h3>
      <h3 class="content-list-header-title col-sm-6 text-left">
        Top fans
      </h3>
    </section>
    <article class="user-list" v-for="user in users">
      <section class="user-list-item">
        <img
          :alt="user.name"
          :title="user.name"
          src="~/static/images/exclusive.jpg"
          class="user-avatar user-avatar-shadow user-avatar-sm">
        <h4 class="user-list-item-name truncate-text">
          <nuxt-link :title="user.name" :aria-label="user.name" :to="'/' + user.name">
            {{user.name}}
          </nuxt-link>
          <span class="user-list-item-subtitle">500 followers</span>
        </h4>
      </section>
    </article>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      users: 'user/data',
    }),
  },
}
</script>
