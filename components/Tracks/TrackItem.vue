<template>
  <div>
    <section class="track-list-item track-list-item-featured">
      <p class="track-list-item-featured-badge" v-if="item.featured && !featured">featured</p>
      <section class="track-thumbnail track-thumbnail-shadow track-thumbnail-sm">
        <img :alt="item.userName" :title="item.userName" src="~/static/images/exclusive.jpg">
      </section>
      <section class="track-body">
        <section>
          <article class="player-control" @click="clickPlay(item.id)">
            <img
              alt="play"
              title="play"
              src="~/static/icons/play.png"
              class="player-control-play rounded-circle"
              v-if="hasBeenPlay.id != item.id">
            <img
              alt="pause"
              title="pause"
              src="~/static/icons/pause.png"
              class="player-control-pause rounded-circle"
              v-else>
          </article>
          <h3 class="track-body-title truncate-text" @click="clickTrackName(item.id)">
            <nuxt-link :title="item.name" :aria-label="item.name" to="/tracks/exclusive">
              {{ item.name }}
            </nuxt-link>
          </h3>
        </section>
        <ul class="track-body-info">
          <li class="track-body-compact-artist" v-if="!userName">
            <nuxt-link
              :title="item.userName"
              :aria-label="item.userName"
              :to="'/' + item.userName">
              <img
                :alt="item.userName"
                :title="item.userName"
                src="~/static/images/exclusive.jpg"
                class="user-avatar user-avatar-xs">
              {{item.userName}}
            </nuxt-link>
            <p v-if="!followers">300 followers </p>
          </li>
          <li class="track-body-genre hidden-xs" v-if="!genre">
            <nuxt-link :title="item.genre" :aria-label="item.genre" to="/search">
              {{item.genre}}
            </nuxt-link>
          </li>
          <li class="hidden-xs" v-if="!followersCount">
            <i class="fa fa-play"></i>
            182.2k
          </li>
          <li class="track-body-share hidden-xs">
            <div class="share-link">
              <i class="fa fa-facebook-square fa-lg"></i>
              <i class="fa fa-twitter fa-lg"></i>
              <span class="share-link-text">Share</span>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import playing from '~/mixins/playing';

export default {
  mixins: [playing],
  props: {
    item: Object,
    featured: Boolean,
    userName: Boolean,
    followers: Boolean,
    genre: Boolean,
    followersCount: Boolean,
  },
  methods: {
    ...mapActions({
      trackItem: 'tracks/trackItem',
    }),
    clickTrackName(id){
      this.trackItem(id);
    }
  }
}
</script>
