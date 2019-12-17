<template>
  <div class="container" id="app">
    <article class="content-page" id="search">
      <h1>SEARCH FOR MUSIC</h1>
      <section class="row">
        <section class="col-sm-12">
          <div>
            <input
              id="search-box"
              type="text"
              role="textbox"
              class="form-control"
              placeholder="Search by title or artist">
          </div>
        </section>
      </section>
      <section class="row">
        <search-filter-tracks />
        <section class="col-sm-7" id="hits-container">
          <track-list
            :followers="true"
            :genre="true"
            :followersCount="true" />
        </section>
        <section class="col-sm-3 hidden-xs">
          <side-banner-app />
          <side-banner-artist />
        </section>
      </section>
      <section class="row">
        <section class="col-sm-2">

        </section>
        <section id="pagination-container" class="col-sm-7">
          <ul class="ais-pagination">
            <li class="pagination-item">
              <nuxt-link to="/search" class="pagination-link">‹</nuxt-link>
            </li>
            <li class="pagination-item">
              <nuxt-link to="/search" class="pagination-link">1</nuxt-link>
            </li>
            <li class="pagination-item">
              <nuxt-link to="/search" class="pagination-link">2</nuxt-link>
            </li>
            <li class="pagination-item">
              <nuxt-link to="/search" class="pagination-link">3</nuxt-link>
            </li>
            <li class="pagination-item">
              <nuxt-link to="/search" class="pagination-link">4</nuxt-link>
            </li>
            <li class="pagination-item">
              <nuxt-link to="/search" class="pagination-link">5</nuxt-link>
            </li>
            <li class="pagination-item">
              <nuxt-link to="/search" class="pagination-link">›</nuxt-link>
            </li>
          </ul>
        </section>
        <section class="col-sm-3">

        </section>
      </section>
    </article>
  </div>
</template>

<script>
const SearchFilterTracks = () => import('~/components/header/SearchFilterTracks');
const TrackList = () => import('~/components/Tracks/TrackList');
const SideBannerApp = () => import('~/components/SideBanner/SideBannerApp');
const SideBannerArtist = () => import('~/components/SideBanner/SideBannerArtist');

export default {
  components: {
    SearchFilterTracks,
    TrackList,
    SideBannerApp,
    SideBannerArtist,
  },
}
</script>
