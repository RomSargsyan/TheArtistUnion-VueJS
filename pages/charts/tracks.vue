<template>
  <charts-content />
</template>

<script>
const ChartsContent = () => import('~/components/charts/ChartsContent');

export default {
  components: {
    ChartsContent,
  },
}
</script>
