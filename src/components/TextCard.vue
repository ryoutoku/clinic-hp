<template>
  <div class="text-card">
    <h2 class="subtitle is-4">
      <slot name="title"></slot>
    </h2>
    <hr>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TextCard extends Vue {
  @Prop({ default: '' }) private title?: string;
}
</script>

<style scoped lang="scss">
.subtitle {
  text-align: left;
  margin-left: 2.5rem;
  margin-bottom: 0;
  margin-top: 1.5rem;
}

.content {
  text-align: left;
  margin: 0 1.5rem 1.5rem 1.5rem;
}

p {
  margin-bottom: 0.5rem !important;
}

.text-card {
  border: 2px solid hsl(204, 86%, 53%);
  border-radius: 0.5rem;
  margin: 1rem;
  background-color: white;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
}
</style>
