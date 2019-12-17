<template>
  <section class="row">
    <section class="col-sm-12">
      <article class="welcome-card">
        <h1 class="welcome-card-title">Welcome to The Artist Union</h1>
        <h2 class="welcome-card-subtitle">
          Discover and support the next generation of artists.
        </h2>
        <section class="welcome-card-artist-list">
          <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide text-center"
                v-for="(user, index) in users"
                :key="index">
                <nuxt-link
                  :title="user.name"
                  :aria-label="user.name"
                  :to="`/${user.name}`">
                    <img
                      :alt="user.name"
                      :title="user.name"
                      src="~/static/images/exclusive.jpg"
                      class="img-fluid" />
                    <small class="text-violet mt-2 d-block">
                      {{ user.name }}
                    </small>
                </nuxt-link>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
        </section>
        <h2 class="welcome-card-callout">
          Do you belong up here too?
          <nuxt-link
            title="Import your music"
            aria-label="Import your music"
            class="text-violet"
            to="/">
            Import your music
          </nuxt-link>
          and let's party.
        </h2>
      </article>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 200,
        autoHeight: true,
        spaceBetween: 15,
        mousewheel: {
          forceToAxis: true,
        },
        autoplay: {
          delay: 3000,
        },
        slidesPerView: 7,
        breakpoints: {
          1200: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          720: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 15,
          }
        },
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      },
    }
  },
  computed: {
    ...mapGetters({
      users: 'user/data',
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
}
</script>
