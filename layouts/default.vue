<template>
  <div>
    <modal-keyboard-shortcuts />
    <app-header />
    <nuxt />
    <app-footer />
    <mini-player />
  </div>
</template>

<script>
const ModalKeyboardShortcuts = () => import('~/components/layouts/ModalKeyboardShortcuts');
const AppHeader = () => import('~/components/layouts/AppHeader');
const AppFooter = () => import('~/components/layouts/AppFooter');
const MiniPlayer = () => import('~/components/addons/MiniPlayer');

export default {
  components: {
    ModalKeyboardShortcuts,
    AppHeader,
    AppFooter,
    MiniPlayer,
  }
}
</script>

<style lang="scss">
  @import "~/assets/style.scss";
</style>
