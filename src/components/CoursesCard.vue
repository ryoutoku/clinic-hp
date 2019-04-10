<template>
  <div class="courses-card">
    <TextCard>
      <template v-slot:title>診療科目</template>
      <template v-slot:content>
        <p>整形外科 リウマチ科 リハビリテーション科</p>
      </template>
    </TextCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextCard from '@/components/TextCard.vue';

@Component({
  components: {
    TextCard
  }
})
export default class CoursesCard extends Vue {}
</script>

<style scoped lang="scss">
</style>
