<template>
  <article class="profile-card">
    <img
      :alt="$route.params.profile"
      :title="$route.params.profile"
      src="~/static/images/logo.png"
      class="user-avatar user-avatar-shadow user-avatar-lg">
    <h1 class="profile-card-title">{{$route.params.profile}}</h1>
    <ul class="profile-stats">
      <li class="profile-stat">
        <span class="profile-stat-label">Followers</span>
        <div class="profile-stat-value">10</div>
      </li>
      <li class="profile-stat">
        <span class="profile-stat-label">Following</span>
        <div class="profile-stat-value">15</div>
      </li>
      <li class="profile-stat">
        <span class="profile-stat-label">Tracks</span>
        <div class="profile-stat-value">70</div>
      </li>
    </ul>
    <a class="btn highlight btn-block">Support</a>
    <section class="login-dropdown">
      <no-ssr>
        <b-nav-item-dropdown
          class="pointer highlight btn btn-block p-0"
          text="Log in to follow">
          <b-dropdown-item>
            <dropdown-login />
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </no-ssr>
    </section>
    <ul class="profile-social-links">
      <li>
        <a href="http://soundcloud.com/imminentremix">
          <i class="fa fa-soundcloud fa-lg"></i>
        </a>
      </li>
    </ul>
    <section class="profile-messenger">
      <section class="login-dropdown">
        <no-ssr>
          <b-nav-item-dropdown
          class="pointer"
          text="Log in to connect on Messenger">
            <b-dropdown-item>
              <dropdown-login />
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </no-ssr>
      </section>
    </section>
  </article>
</template>

<script>
const DropdownLogin = () => import('~/components/dropdown/DropdownLogin');

export default {
  components: {
    DropdownLogin
  }
}
</script>
