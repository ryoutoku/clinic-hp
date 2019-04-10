<template>
  <div class="access">
    <BaseView :title="'アクセス'">
      <template v-slot:left-content>
        <TextCard>
          <template v-slot:title>住所</template>
          <template v-slot:content>
            <p>〒781-8104</p>
            <p>高知県高知市高須2丁目18−19</p>
          </template>
        </TextCard>
        <TextCard>
          <template v-slot:title>アクセス</template>
          <template v-slot:content>
            <p>とさでん交通後免線 新木停留所より南へ400m</p>
            <p>専用駐車場があるため車でのアクセスも可能です。</p>
          </template>
        </TextCard>
        <TextCard>
          <template v-slot:title>お問い合わせ</template>
          <template v-slot:content>
            <p>医療法人孝仁会 杉本整形外科</p>
            <p>電話番号：088-884-5100</p>
            <p>FAX番号：088-884-5137</p>
          </template>
        </TextCard>
      </template>
      <template v-slot:right-content>
        <ImageCard>
          <template v-slot:content>
            <img src="@/assets/access_map.jpg" alt="アクセスマップ">
          </template>
        </ImageCard>
        <div class="iframeWrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.743943685568!2d133.58772781458782!3d33.560028550956176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354e1c65fdbe61df%3A0x22c0ca844931b20b!2z44CSNzgxLTgxMDQg6auY55-l55yM6auY55-l5biC6auY6aCI77yS5LiB55uu77yR77yY4oiS77yR77yZIOadieacrOaVtOW9ouWkluenkQ!5e0!3m2!1sja!2sjp!4v1554722822083!5m2!1sja!2sjp"
            allowfullscreen
          ></iframe>
        </div>
      </template>
    </BaseView>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextCard from '@/components/TextCard.vue';
import BaseView from '@/views/BaseView.vue';
import ImageCard from '@/components/ImageCard.vue';

@Component({
  components: {
    TextCard,
    BaseView,
    ImageCard
  }
})
export default class Guid extends Vue {}
</script>

<style scoped lang="scss">
.iframeWrap {
  height: 400px;
  margin: 1rem;
  border: 2px solid #209cee;
  border-radius: 0.5rem;
  padding-bottom: 62.5%;
  position: relative;
  overflow: hidden;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
}
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
