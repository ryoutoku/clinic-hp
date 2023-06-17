<template>
  <div class="base-view">
    <h1 class="title is-3">{{ title }}</h1>
    <div class="columns is-centered">
      <div class="column is-7">
        <slot name="left-content"></slot>
      </div>
      <div class="column is-5">
        <slot name="right-content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class BaseView extends Vue {
  @Prop({ default: '' }) title?: string;
}
</script>

<style scoped lang="scss">
.base-view {
  margin: 1rem;
  width: 85%;
  display: inline-block;
  text-align: center;
}
</style>
