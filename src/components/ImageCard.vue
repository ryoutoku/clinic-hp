<template>
  <div class="image-card">
    <img :src="imageUrl(src)" :alt="alt" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImageCard extends Vue {
  @Prop({ type: String, required: true }) src?: string;
  @Prop({ type: String, required: true }) alt?: string;

  imageUrl(aaa: string | undefined) {
    return require(`@/assets/${aaa}`);
  }
}
</script>

<style lang="scss" scoped>
.image-card {
  margin: 1rem;
}

img {
  width: 100%;
  height: auto;
}
</style>
