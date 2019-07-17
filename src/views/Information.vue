<template>
  <div class="base-view">
    <h1 class="title is-3">お知らせ</h1>
    <div class="columns is-centered">
      <TextCard>
        <template v-slot:title>2019年9月17日(火)は、休診となります。</template>
        <template v-slot:content>
          <img src="@/assets/Capture.jpg" alt="9月の休診予定" />
        </template>
      </TextCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextCard from '@/components/TextCard.vue';
import BaseView from '@/views/BaseView.vue';

@Component({
  components: {
    TextCard,
    BaseView
  }
})
export default class Guid extends Vue {}
</script>

<style scoped lang="scss">
.base-view {
  margin: 1rem;
  width: 85%;
  display: inline-block;
  text-align: center;
}
</style>
