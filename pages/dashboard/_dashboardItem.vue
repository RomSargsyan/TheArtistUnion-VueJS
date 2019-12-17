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
        <tracks v-if="$route.params.dashboardItem == 'tracks'" />
        <stats v-if="$route.params.dashboardItem == 'stats'" />
        <followers v-if="$route.params.dashboardItem == 'followers'" />
        <emails v-if="$route.params.dashboardItem == 'emails'" />
        <donations v-if="$route.params.dashboardItem == 'donations'" />
        <referrals v-if="$route.params.dashboardItem == 'referrals'" />
        <account v-if="$route.params.dashboardItem == 'account'"/>
      </article>
    </article>
  </div>
</template>

<script>
const Stats = () => import('~/components/dashboard/Stats');
const Tracks = () => import('~/components/dashboard/Tracks');
const Followers = () => import('~/components/dashboard/Followers');
const Emails = () => import('~/components/dashboard/Emails');
const Donations = () => import('~/components/dashboard/Donations');
const Referrals = () => import('~/components/dashboard/Referrals');
const Account = () => import('~/components/dashboard/Account');


export default {
  components: {
    Stats,
    Tracks,
    Followers,
    Emails,
    Donations,
    Referrals,
    Account,
  }
}
</script>
