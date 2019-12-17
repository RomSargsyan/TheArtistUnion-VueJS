<template>
  <section class="col-sm-2">
    <section id="genre">
      <div class=" toggle-header">
        Genres
      </div>
      <div v-for="(item, index ) in genre.slice(0, genre.length - count)" :key="index">
        <div class="toggle-item">
          <span class="toggle-label">
            <input type="checkbox" class="toggle-checkbox" :value="item.name">
            {{item.name}}
          </span>
        </div>
      </div>
      <span class="show-more show-more-inactive" @click="clickShowMore">
        {{ titleShow }}
      </span>
    </section>
    <section id="sample">
      <div class="toggle-header ais-header">
        Type
      </div>
      <div class="toggle-item">
        <label class="toggle-label">
          <input type="checkbox" class="toggle-checkbox" value="Samples/Presets">
          Samples/Presets
        </label>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      count: 20,
      titleShow: "SHOW MORE GENRES",
    }
  },
  computed: {
    ...mapGetters({
      genre: 'tracks/genre'
    })
  },
  methods: {
    clickShowMore() {
      if (this.count == 20) {
        this.count = 0;
        this.titleShow = "SHOW LESS GENRES";
      } else {
        this.count = 20;
        this.titleShow = "SHOW MORE GENRES";
      }
    }
  }
}
</script>
