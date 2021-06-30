<template>
  <div class="not-found">
    <BaseView :title="'お探しのページは見つかりませんでした'">
      <template v-slot:left-content>
        <TextCard>
          <template v-slot:title>お探しのページは見つかりませんでした</template>
          <template v-slot:content>
            <p>お探しのページは見つかりませんでした。</p>
            <p><router-link class="router" to="/">こちら</router-link>よりホームにお戻りください。</p>
          </template>
        </TextCard>
      </template>
    </BaseView>
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
export default class PageNotFound extends Vue {}
</script>

<style scoped lang="scss">
.base-view {
  margin: 1rem;
  width: 85%;
  display: inline-block;
  text-align: center;
}
</style>
