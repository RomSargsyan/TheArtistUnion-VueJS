<template>
  <div>
    <track-item
      v-for="(item, index) in tracks"
      :item="item"
      :featured="featured"
      :userName="userName"
      :followers="followers"
      :genre="genre"
      :followersCount="followersCount"
      :key="index"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
const TrackItem = () =>  import('~/components/Tracks/TrackItem');

export default {
  props: {
    featured: Boolean,
    userName: Boolean,
    followers: Boolean,
    genre: Boolean,
    followersCount: Boolean,
  },
  components: {
    TrackItem,
  },
  computed: {
    ...mapGetters({
      tracks: 'tracks/data',
    }),
  },
}
</script>
