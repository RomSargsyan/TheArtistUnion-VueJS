<template>
  <div class="container" id="app">
    <article class="artists-page animated fadeIn">
      <h1 class="artists-page-title">
        Get more followers on SoundCloud
      </h1>
      <h2>Free tools for growing your audience &amp; fanbase.<br>
        Get peace of mind &amp; get on making music.
      </h2>
      <section class="login-dropdown">
        <no-ssr>
          <b-nav-item-dropdown
            class="pointer highlight artists-dropdown btn btn-block p-2"
            text="Sign up for a free artist account">
            <b-dropdown-item>
              <dropdown-login class="text-center"/>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </no-ssr>
      </section>
      <section class="row artists-page-banner">
        <section class="col-sm-4 animated bounce delay-1">
          <img alt="price" title="price" src="~/static/icons/price.svg">
          <h3>Get more followers</h3>
        </section>
        <section class="col-sm-4 animated rubberBand delay-2">
          <img alt="fire" title="fire" src="~/static/icons/fire.svg">
          <h3>Join a Dope community</h3>
        </section>
        <section class="col-sm-4 animated tada delay-3">
          <img alt="cool" title="cool" src="~/static/icons/cool.svg">
          <h3>It's Free forever</h3>
        </section>
      </section>
      <section class="artists-page-hero">
        Artists get
        <span class="artists-page-hero-text">5x more followers on SoundCloud</span>
        using The Artist Union.<br>Our tools also work on
        <span class="artists-page-hero-text">all major platforms</span>
        <section class="artists-page-social-icons">
          <section class="fa fa-soundcloud fa-lg social-icons" style="margin-bottom: 20px" />
          <section class="fa fa-spotify fa-lg social-icons" />
          <section class="fa fa-youtube-play fa-lg social-icons" />
          <section class="fa fa-facebook-square fa-lg social-icons" />
          <section class="fa fa-snapchat fa-lg social-icons" />
          <section class="fa fa-instagram fa-lg social-icons" />
          <section class="fa fa-twitter fa-lg social-icons" />
        </section>
      </section>
      <section class="artists-page-panes">
        <section class="row">
          <section class="col-sm-6 artists-page-img-container">
            <img
              alt="download-gate"
              title="download-gate"
              src="~/static/images/download-gate.png"
              class="download-gate">
            <section class="artists-page-img artists-page-img-download-gate" />
          </section>
          <section class="col-sm-6 artists-page-benefit">
            <h2>Get more followers via free downloads</h2>
            <p>
              Fans will support you through following/subscribing, reposting,
              favoriting, etc. to get a free download. <br>
              <nuxt-link
                title="See an example"
                aria-label="See an example"
                to="/tracks/c6f1ac">
                See an example
              </nuxt-link>.
            </p>
          </section>
        </section>
        <section class="row">
          <section class="col-sm-6 col-sm-pull-6 artists-page-benefit">
            <h2>Notify fans when you drop new music</h2>
            <p>
              Your followers are notified via Facebook Messenger, The Artist Union
              iOS &amp; Android apps, and email whenever you release new music.
            </p>
          </section>
          <section class="col-sm-6 col-sm-push-6 artists-page-img-container">
            <img
              alt="messenger"
              title="messenger"
              src="~/static/images/messenger.png"
              class="messenger">
            <section class="artists-page--img artists-page-img-messenger" />
          </section>
        </section>
      </section>
      <section class="artists-page-hero">
        Our tools are
        <span class="artists-page-hero-text">totally free</span>&amp; used by
        <span class="artists-page-hero-text">over 60,000 artists</span>
        <section>
          <section class="login-dropdown">
            <no-ssr>
              <b-nav-item-dropdown
                class="pointer highlight artists-dropdown btn btn-block p-2"
                text="Sign up for a free artist account">
                <b-dropdown-item>
                  <dropdown-login class="text-center" />
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </no-ssr>
          </section>
        </section>
      </section>
    </article>
  </div>
</template>

<script>
const DropdownLogin = () => import('~/components/dropdown/DropdownLogin');

export default {
  components: {
    DropdownLogin,
  }
}
</script>
