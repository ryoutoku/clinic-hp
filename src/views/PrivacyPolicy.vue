<template>
  <div class="base-view">
    <h1 class="title is-3">プライバシーポリシー</h1>
    <div class="columns is-centered">
      <TextCard>
        <template v-slot:title>プライバシーポリシー</template>
        <template v-slot:content>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
          <p>
            この規約に関しての詳細は<a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              rel="noopener noreferrer"
              target="_blank"
              class="external ext_icon"
              >Googleアナリティクスサービス利用規約</a
            >のページや<a
              href="https://policies.google.com/technologies/ads?hl=ja"
              rel="noopener noreferrer"
              target="_blank"
              class="external ext_icon"
              >Googleポリシーと規約</a
            >ページをご覧ください。
          </p>
        </template>
      </TextCard>
    </div>
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TextCard,
  },
})
export default class PrivacyPolicy extends Vue {}
</script>

<style scoped lang="scss">
.base-view {
  margin: 1rem;
  width: 85%;
  display: inline-block;
  text-align: center;
}
</style>
