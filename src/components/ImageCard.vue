<template>
  <div class="image-card">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ImageCard extends Vue {}
</script>

<style lang="scss" scoped>
.image-card {
  margin: 1rem;
}
</style>
