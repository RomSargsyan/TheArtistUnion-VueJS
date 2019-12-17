<template>
  <div class="container" id="app">
    <article class="public-page">
      <section class="row">
        <section class="col-lg-3 col-md-4">
          <side-banner-profile-card />
          <side-banner-app class="hidden-xs" />
          <side-banner-artist class="hidden-xs" />
        </section>
        <section class="col-lg-9 col-md-8">
          <article class="profile-description">
            <section class="profile-description-title">BIO</section>
            <div class="DraftEditor-root">
              <div class="DraftEditor-editorContainer">
                <div class="public-DraftEditor-content">
                  <div>
                    <span>Official Artist Union Acct </span>
                    <nuxt-link
                      title="artistunionnoire"
                      aria-label="artistunionnoire"
                      class="draftEditor-link"
                      to="/">
                      artistunionnoire
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="content-list track-lists">
            <section class="content-list-header">
              <nuxt-link
                title="MY RELEASES"
                aria-label="MY RELEASES"
                class="content-list-header-title pr-3"
                :to="'/' + 'userName' + '/tracks'">
                MY RELEASES
              </nuxt-link>
              <nuxt-link
                title="RECENTLY SUPPORTED"
                aria-label="RECENTLY SUPPORTED"
                class="content-list-header-title"
                :to="'/'+'userName'+'/supported'">
                RECENTLY SUPPORTED
              </nuxt-link>
              <nuxt-link
                title="POWERSCORE"
                aria-label="POWERSCORE"
                class="content-list-header-title pl-3"
                :to="'/' + 'userName' + '/powerscore'">
                POWERSCORE
              </nuxt-link>
            </section>
            <track-list
            :userName="true"
            :followers="true"/>
          </article>
        </section>
      </section>
    </article>
  </div>
</template>

<script>
const SideBannerProfileCard = () => import('~/components/SideBanner/SideBannerProfileCard');
const SideBannerApp = () => import('~/components/SideBanner/SideBannerApp');
const SideBannerArtist = () => import('~/components/SideBanner/SideBannerArtist');
const TrackList = () => import('~/components/Tracks/TrackList');

export default {
  components: {
    SideBannerProfileCard,
    SideBannerApp,
    SideBannerArtist,
    TrackList
  },
}
</script>
