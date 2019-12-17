<template>
  <article class="container">
    <section style="padding-top: 86px">
      <welcome-card />
      <artist-card />
    </section>
    <section class="row">
      <section class="col-lg-9 col-md-8">
        <content-card />
      </section>
      <section class="col-lg-3 col-md-4 hidden-xs">
        <side-banner-app />
        <side-banner-artist />
        <side-banner-youtube />
      </section>
    </section>
  </article>
</template>

<script>
const WelcomeCard = () => import('~/components/WelcomeCard');
const ArtistCard = () => import('~/components/ArtistCard');
const ContentCard = () => import('~/components/ContentCard');
const SideBannerApp = () => import('~/components/SideBanner/SideBannerApp');
const SideBannerArtist = () => import('~/components/SideBanner/SideBannerArtist');
const SideBannerYoutube = () => import('~/components/SideBanner/SideBannerYoutube');

export default {
  async fetch ({ store, params }) {
    await store.dispatch('tracks/getData');
  },
  components: {
    WelcomeCard,
    ArtistCard,
    ContentCard,
    SideBannerApp,
    SideBannerArtist,
    SideBannerYoutube,
  },
}
</script>
