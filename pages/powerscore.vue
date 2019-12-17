<template>
  <div class="container" id="app">
    <powerscore />
  </div>
</template>

<script>
const Powerscore = () => import('~/components/header/Powerscore');
export default {
  components: {
    Powerscore,
  }
}
</script>
