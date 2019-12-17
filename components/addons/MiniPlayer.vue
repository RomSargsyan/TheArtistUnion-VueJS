<template>
  <article id="player" v-if="openPlayer">
    <section class="player-left">
      <section class="track-thumbnail track-thumbnail-shadow track-thumbnail-sm">
        <img alt="user image" title="user image" src="~/static/images/logo.png">
      </section>
      <section class="player-track-badge">
        <span class="strong-label">NOW PLAYING</span>
        <h1 class="player-track-title truncate-text">
          <nuxt-link :title="playerTrack.name" :to="'/tracks/' + playerTrack.name">
            {{ playerTrack.name }}
          </nuxt-link>
        </h1>
      </section>
    </section>
    <section class="player-right hidden-xs">
      <section class="player-controls">
        <div class="share-link">
          <i class="fa fa-facebook-square fa-2x player-icon"></i>
          <i class="fa fa-twitter fa-2x player-icon"></i>
        </div>
        <i class="fa fa-step-backward fa-lg player-icon"></i>
        <span @click="clickPlay(playerTrack.id)">
          <i class="fa fa-play fa-lg player-icon" v-if="!hasBeenPlay.id"></i>
          <i class="fa fa-pause fa-lg player-icon" v-else></i>
        </span>
        <i class="fa fa-step-forward fa-lg player-icon"></i>
        <i class="fa fa-arrow-circle-o-down fa-lg player-icon"></i>
        <i class="fa fa-repeat fa-lg player-icon"></i>
      </section>
      <section class="player-progress-bar hidden-sm hidden-xs">
        <section class="progress-bar-background" />
        <section class="progress-bar-foreground" />
      </section>
      <section class="player-ticker">
        <span class="ticker-value">0:00</span>
        <span class="ticker-divider">/</span>
        <span class="ticker-duration">0:00</span>
      </section>
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import playing from '~/mixins/playing';

export default {
  mixins: [playing],
  computed: {
    ...mapGetters({
      playerTrack: 'player/playerTrack',
    })
  }
}
</script>
