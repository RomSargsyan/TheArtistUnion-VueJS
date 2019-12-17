<template>
  <div class="container" id="app">
    <article class="dashboard row">
      <aside class="dashboard-nav col-sm-2 p-0">
        <h3 class="dashboard-nav-title m-0">DASHBOARD</h3>
        <section class="tabs">
          <ul class="nav nav-tabs">
            <li class="text-left">
              <nuxt-link to="/dashboard/tracks">
                <i class="fa fa-music" />
                Tracks
              </nuxt-link>
            </li>
            <li class="text-left">
              <nuxt-link to="/dashboard/stats">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                Stats
              </nuxt-link>
            </li>
            <li class="text-left">
              <nuxt-link to="/dashboard/followers">
                <i class="fa fa-user" />
                Followers
              </nuxt-link>
            </li>
            <li class="text-left">
              <nuxt-link to="/dashboard/emails">
                <i class="fa fa-envelope" />
                Email List
              </nuxt-link>
            </li>
            <li class="text-left">
              <nuxt-link to="/dashboard/donations">
                <i class="fa fa-usd" />
                Donations
              </nuxt-link>
            </li>
            <li class="text-left">
              <nuxt-link to="/dashboard/referrals">
                <i class="fa fa-link" />
                Referrals
              </nuxt-link>
            </li>
            <li class="text-left">
              <nuxt-link to="/dashboard/account">
                <i class="fa fa-cog" />
                Account
              </nuxt-link>
            </li>
          </ul>
        </section>
      </aside>
      <article class="dashboard-content col-sm-10">
        <h1 class="dashboard-content-title m-0 text-center">TRACKS</h1>
        <article class="empty-state text-center">
          <h4>Nothing here</h4>
          <div>
            <span>You don't have any music yet. Add some to get started.</span><br>
            <a class="btn highlight">Add music</a>
          </div>
        </article>
      </article>
    </article>
  </div>
</template>

<script>
export default {}
</script>
