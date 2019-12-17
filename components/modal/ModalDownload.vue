<template>
  <div>
    <no-ssr>
      <b-modal id="modal-download" ref="modalDownload" hide-header hide-footer>
        <div class="modal-download">
          <div class="modal-header p-0">
            <div class="row">
              <h1 class="modal-title col-sm-12">Download this track for free.</h1>
              <h2 class="modal-subtitle col-sm-12">Listen on your phone and computer!</h2>
            </div>
            <button aria-label="Close" @click="close" type="button" class="close">
              <span>x</span>
            </button>
          </div>
          <div class="modal-body pt-0 pb-0">
            <article class="download-reqs">
              <ul class="modal-download-content">
                <li>Give your email to mixunion</li>
                <li>
                  Favorite <nuxt-link to="/">this track</nuxt-link>
                </li>
                <li>
                  Repost <nuxt-link to="/">this track</nuxt-link>
                </li>
                <li>
                  Follow <nuxt-link to="/">mixunion</nuxt-link>
                </li>
                <li>
                  Follow <nuxt-link to="/">artistunion</nuxt-link>
                </li>
                <li>
                  Follow collaborators:
                  <nuxt-link to="/">featurepr</nuxt-link>,
                  <nuxt-link to="/">mixfeedru</nuxt-link>,
                  <nuxt-link to="/">mixfeed</nuxt-link>,
                  <nuxt-link to="/">zer0day</nuxt-link>,
                  <nuxt-link to="/">properpr</nuxt-link>,
                  <nuxt-link to="/">fractallmusic</nuxt-link>,
                  <nuxt-link to="/">fractalldownloads</nuxt-link>,
                  <nuxt-link to="/">gabe</nuxt-link>,
                  <nuxt-link to="/">klandestinepr</nuxt-link>,
                  <nuxt-link to="/">hallucinogenmusic</nuxt-link>
                </li>
                <li>
                  Follow <nuxt-link to="/">this playlist</nuxt-link> on Spotify
                </li>
                <li>
                  Follow <nuxt-link to="/">this artist</nuxt-link> on Spotify
                </li>
                <li>
                  Follow <nuxt-link to="/">this playlist</nuxt-link> on Spotify
                </li>
                <li>
                  Follow <nuxt-link to="/">this playlist</nuxt-link> on Spotify
                </li>
                <li>
                  Follow <nuxt-link to="/">AU's playlist</nuxt-link> on Spotify
                </li>
              </ul>
            </article>
          </div>
          <div class="modal-footer p-0">
            <section style="width: 100%">
              <a class="btn highlight btn-block">
                Connect with SoundCloud
              </a>
              <section class="login-dropdown">
                <no-ssr>
                  <b-nav-item-dropdown
                    class="dropdown-modal-item pointer"
                    text="Have an account? Log in">
                    <b-dropdown-item>
                      <dropdown-login />
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
                </no-ssr>
              </section>
            </section>
          </div>
        </div>
      </b-modal>
    </no-ssr>
  </div>
</template>

<script>
const DropdownLogin = () => import('~/components/dropdown/DropdownLogin');

export default {
  components: {
    DropdownLogin,
  },
  methods: {
    close() {
      this.$refs.modalDownload.hide();
    }
  }
}
</script>
