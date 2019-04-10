<template>
  <div class="access-card">
    <TextCard>
      <template v-slot:title>アクセス</template>
      <template v-slot:content>
        <p>とさでん交通後免線 新木停留所より南へ400m</p>
        <p>専用駐車場があるため車でのアクセスも可能です。</p>
        <router-link to="/access">地図はこちらです</router-link>
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
export default class AccessCard extends Vue {}
</script>

<style scoped lang="scss">
</style>
