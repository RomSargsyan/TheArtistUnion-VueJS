<template>
  <header class="charts-nav">
    <section class="tabs">
      <ul class="nav nav-tabs justify-content-center">
        <li>
          <nuxt-link title="TRACKS" aria-label="TRACKS" to="/charts/tracks">
            <i class="fa fa-music"></i>
            TRACKS
          </nuxt-link>
        </li>
        <li>
          <nuxt-link title="SETS" aria-label="SETS" to="/charts/sets">
            <i class="fab fa-compact-disc"></i>
            SETS
          </nuxt-link>
        </li>
        <li>
          <nuxt-link title="SAMPLES" aria-label="SAMPLES" to="/charts/samples">
            <i class="fa fa-file"></i>
            SAMPLES
          </nuxt-link>
        </li>
      </ul>
    </section>
  </header>
</template>

<script>
export default {
}
</script>
