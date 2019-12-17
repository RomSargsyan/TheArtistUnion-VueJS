<template>
  <div class="container" style="margin-top: 60px">
    <charts-header />
    <section class="row">
      <section class="col-md-9">
        <article class="item-list charts-card">
          <track-list />
        </article>
      </section>
      <section class="col-md-3 hidden-xs">
        <side-banner-app />
        <side-banner-artist />
        <side-banner-youtube />
      </section>
    </section>
  </div>
</template>

<script>
const ChartsHeader = () => import('~/components/header/ChartsHeader');
const TrackList = () => import('~/components/Tracks/TrackList');
const SideBannerApp = () => import('~/components/SideBanner/SideBannerApp');
const SideBannerArtist = () => import('~/components/SideBanner/SideBannerArtist');
const SideBannerYoutube = () => import('~/components/SideBanner/SideBannerYoutube');

export default {
  components: {
    ChartsHeader,
    TrackList,
    SideBannerApp,
    SideBannerArtist,
    SideBannerYoutube,
  },
}
</script>
