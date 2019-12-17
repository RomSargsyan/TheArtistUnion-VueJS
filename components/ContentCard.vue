<template>
  <article class="content-page">
    <article class="item-list">
      <h3 class="item-list-title">
        <img alt="bolt" title="bolt" src="~/static/icons/bolt.svg" class="smiley">
        HOT RIGHT NOW
        <img alt="bolt" title="bolt" src="~/static/icons/bolt.svg" class="smiley">
      </h3>
      <track-list :followers="true" />
    </article>
  </article>
</template>

<script>
const TrackList = () => import('~/components/Tracks/TrackList');

export default {
  components: {
    TrackList,
  },
}
</script>
