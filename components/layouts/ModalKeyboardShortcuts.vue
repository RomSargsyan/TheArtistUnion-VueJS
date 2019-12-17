<template>
  <div>
    <no-ssr>
      <b-modal id="modal-keyboard" ref="modalKeyboard" hide-header hide-footer>
        <div class="modal-keyboard">
          <div slot="modal-header" class="modal-header row">
            <h1 class="modal-title col-sm-10 ml-3">Keyboard shortcuts</h1>
            <button aria-label="Close" @click="close" type="button" class="close col-sm-2">
              <span>x</span>
            </button>
          </div>
          <div slot="modal-body" class="modal-body">
            <section class="row">
              <section class="col-sm-6">
                <code>Space</code>
                <span>Play or pause</span>
              </section>
              <section class="col-sm-6">
                <code>P</code>
                <span>Navigate to current track</span>
              </section>
            </section>
            <section class="row">
              <section class="col-sm-6">
                <code>→</code>
                <span>Play next track</span>
              </section>
              <section class="col-sm-6">
                <code>A</code>
                <span>Navigate to current artist</span>
              </section>
            </section>
            <section class="row">
              <section class="col-sm-6">
                <code>←</code>
                <span>Play previous track</span>
              </section>
              <section class="col-sm-6">
                <code>D</code>
                <span>Download current track</span>
              </section>
            </section>
            <section class="row">
              <section class="col-sm-6">
                <code>R</code>
                <span>Toggle repeat</span>
              </section>
              <section class="col-sm-6">
                <code>S</code>
                <span>Search</span>
              </section>
            </section>
          </div>
        </div>
      </b-modal>
    </no-ssr>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$refs.modalKeyboard.hide();
    }
  }
}
</script>
