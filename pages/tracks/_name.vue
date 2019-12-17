<template>
  <article class="container">
    <section style="padding-top: 86px">
      <track-card />
      <artist-card />
      <section class="row">
        <section class="col-lg-9 col-md-8">
          <article class="item-list">
            <section class="content-list-header row">
              <h3 class="content-list-header-title col-sm-6 text-right">
                MORE TRACKS BY THIS ARTIST
              </h3>
              <h3 class="content-list-header-title col-sm-6 text-left">
                RELATED TRACKS
              </h3>
            </section>
            <track-list
              :userName="true"
              :followers="true" />
          </article>
        </section>
        <section class="col-lg-3 col-md-4 hidden-xs">
          <side-banner-content-list class="hidden-sm"/>
          <side-banner-app />
          <side-banner-artist />
          <side-banner-youtube />
        </section>
      </section>
    </section>
  </article>
</template>

<script>
const TrackCard = () => import('~/components/Tracks/TrackCard');
const ArtistCard = () => import('~/components/ArtistCard');
const TrackList = () => import('~/components/Tracks/TrackList');
const SideBannerContentList = () => import('~/components/SideBanner/SideBannerContentList')
const SideBannerApp = () => import('~/components/SideBanner/SideBannerApp');
const SideBannerArtist = () => import('~/components/SideBanner/SideBannerArtist');
const SideBannerYoutube = () => import('~/components/SideBanner/SideBannerYoutube');

export default {
  components: {
    TrackCard,
    ArtistCard,
    TrackList,
    SideBannerContentList,
    SideBannerApp,
    SideBannerArtist,
    SideBannerYoutube,
  }
}
</script>
