<template>
  <div class="container" style="margin-top: 60px">
    <charts-header />
    <section class="row">
      <section class="col-md-9">
        <div class="select-box" :class="{open: hasBeenSelectBoxOpen}">
          <div @click="clickedSearch">
            <input
              @input="filterContinents"
              v-model="filterValue"
              :placeholder="continent"
              class="select-input"
              type="text">
            <span class="select-arrow" />
          </div>
          <div class="select-option" :class="{open: hasBeenSelectBoxOpen}">
            <p @click="clickedContinent(continent)" v-for="continent in continents">
              {{continent}}
            </p>
          </div>
        </div>
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
  data(){
    return {
      continents: [
        'Africa',
        'Europa',
        'North America',
        'South America',
        'Asia',
        'Oceania'
      ],
      continent: 'Africa',
      filterValue: '',
      hasBeenSelectBoxOpen: false,
      hasBeenSelectBoxClose: false,
    }
  },
  methods: {
    clickedSearch(){
      this.hasBeenSelectBoxOpen = !this.hasBeenSelectBoxOpen;
      this.hasBeenSelectBoxClose = this.hasBeenSelectBoxOpen;
    },
    clickedContinent(continent){
      this.continent = continent;
      this.hasBeenSelectBoxOpen = false;
    },
    filterContinents(){
      return this.continents.filter(value =>
        value.toLowerCase().indexOf(this.filterValue.toLowerCase()) != -1
      )
    }
  },
  mounted() {
    window.addEventListener('click', ({ target }) => {
      this.hasBeenSelectBoxClose = !this.hasBeenSelectBoxClose;
      if(this.hasBeenSelectBoxClose){
        this.hasBeenSelectBoxOpen = false;
        this.filterValue = '';
      }
    });
  },
}
</script>
