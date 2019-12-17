<template>
  <header>
    <nav class="navbar navbar-expand-md bg-white shadow-sm fixed-top">
      <div class="container">
        <nuxt-link
          title="promo codes"
          aria-label="promo codes"
          class="navbar-brand"
          to="/">
          <img
            src="~/static/images/logo.png"
            @click="scrollToTop"
            style="width: 40px"
            title="promo codes"
            alt="Promo Codes" />
        </nuxt-link>
        <button
          aria-label="bars"
          class="navbar-toggler"
          type="button"
          @click="clickOpenNavbar">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div
        class="collapse navbar-collapse"
        :class="{openNavbar: isOpenNavbar}"
        id="collapsibleNavbar">
          <form class="navbar-form navbar-left">
            <nuxt-link
              title="Search"
              aria-label="Search"
              to="/search"
              class="form-group search-box position-relative">
              <input class="form-control" type="text">
              <i class="fa fa-search fa-lg"></i>
            </nuxt-link>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link
                title="Charts"
                aria-label="Charts"
                class="nav-link"
                to="/charts">
                Charts
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                title="Powerscore"
                aria-label="Powerscore"
                class="nav-link"
                to="/powerscore">
                Powerscore
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                title="Submite music"
                aria-label="Submite music"
                class="nav-link"
                to="/submit">
                Submite music
              </nuxt-link>
            </li>
            <li class="nav-item">
              <no-ssr>
                <b-nav-item-dropdown text="More">
                 <b-dropdown-item>
                   <dropdown-more />
                 </b-dropdown-item>
                </b-nav-item-dropdown>
              </no-ssr>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <!-- <li class="nav-item mt-2">
              <no-ssr>
                <b-nav-item-dropdown class="nav-item-dropdown">
                  <template slot="button-content">
                    <nuxt-link class="highlight" to="/auth/register">
                      Sign up
                      <span class="select-arrow color-white-arrow"></span>
                    </nuxt-link>
                  </template>
                  <b-dropdown-item>
                    <dropdown-login />
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </no-ssr>
            </li> -->
            <!-- <li class="nav-item dropdown mt-2">
              <no-ssr>
                <b-nav-item-dropdown class="nav-item-dropdown">
                  <template slot="button-content">
                    <nuxt-link to="/auth/login">
                      Log in
                      <span class="select-arrow"></span>
                    </nuxt-link>
                  </template>
                  <b-dropdown-item>
                    <dropdown-login />
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </no-ssr>
            </li> -->
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <button arial-label="add music" class="btn highlight m-0">
                Add music
              </button>
            </li>
            <li class="nav-item mt-2">
              <no-ssr>
                <b-nav-item-dropdown text="logout" right>
                  <b-dropdown-item>
                    <dropdown-user />
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </no-ssr>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
const DropdownLogin = () => import('~/components/dropdown/DropdownLogin');
const DropdownMore = () => import('~/components/dropdown/DropdownMore');
const DropdownUser = () => import('~/components/dropdown/DropdownUser');

export default {
  components: {
    DropdownLogin,
    DropdownMore,
    DropdownUser,
  },
  data(){
    return {
      isOpenNavbar: false,
    }
  },
  methods: {
    scrollToTop(){
      window.scrollTo({
        top: 0,
      });
    },
    clickOpenNavbar(){
      this.isOpenNavbar = !this.isOpenNavbar;
    }
  }
}
</script>
