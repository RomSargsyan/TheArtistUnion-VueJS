<template>
  <article class="track-card charts-card row">
    <track-item :item="item" :featured="true" class="col-md-10" />
    <section class="track-cards-actions col-md-2">
      <section class="track-cards-actions-list">
        <a v-b-modal.modal-download class="btn highlight">
          Free Download
        </a>
        <section>
          <br><a>
            <strong>Want this on your phone?</strong>
          </a>
        </section>
      </section>
    </section>
    <modal-download />
  </article>
</template>

<script>
import { mapGetters} from 'vuex';
import playing from '~/mixins/playing';
const TrackItem = () =>  import('~/components/Tracks/TrackItem');
const ModalDownload = () => import('~/components/modal/ModalDownload');

export default {
  mixins: [playing],
  components: {
    TrackItem,
    ModalDownload,
  },
  computed:{
    ...mapGetters({
      item: 'tracks/item'
    }),
  },
}
</script>
