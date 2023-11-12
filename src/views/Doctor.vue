<template>
  <div class="guid">
    <BaseView :title="'医師紹介'">
      <template v-slot:left-content>
        <TextCard>
          <template v-slot:title>院長</template>
          <template v-slot:content>
            <p>医学博士&nbsp;&nbsp;&nbsp;杉本 康三</p>
          </template>
        </TextCard>
        <TextCard>
          <template v-slot:title>専門医</template>
          <template v-slot:content>
            <p>(社)日本整形外科学会 整形外科専門医</p>
            <p>財団法人 日本リウマチ財団 リウマチ登録医</p>
          </template>
        </TextCard>
        <TextCard>
          <template v-slot:title>院長あいさつ</template>
          <template v-slot:content>
            <p>
              高齢者の膝の痛みの原因である変形性膝関節症の治療に力を注いでおり、膝の痛みと歩行障害による患者さんの活動性の低下をできるだけ軽減できるよう、援助していきたいと考えています。
            </p>
            <p>病診連携を推進し、地域医療に少しでも貢献できればとの思いで診療しています。</p>
            <p>当院ではインフォームドコンセント（説明と同意）を重視しており、丁寧で充分な説明を心掛けています。</p>
          </template>
        </TextCard>
        <TextCard>
          <template v-slot:title>経歴</template>
          <template v-slot:content>
            <p>
              <span class="col-1">昭和47年 3月</span>
              <span class="col-2">横浜市立大学医学部卒業</span>
            </p>
            <p>
              <span class="col-1">昭和47年 5月～</span>
              <span class="col-2">横浜市立大学医学部付属病院勤務</span>
            </p>
            <p>
              <span class="col-1">昭和50年 6月～</span>
              <span class="col-2">神奈川県立こども医療センター整形外科</span>
            </p>
            <p>
              <span class="col-1">昭和51年 6月～</span>
              <span class="col-2">横浜市立港湾病院整形外科</span>
            </p>
            <p>
              <span class="col-1">昭和55年 6月～</span>
              <span class="col-2">横浜市立大学医学部整形外科</span>
            </p>
            <p>
              <span class="col-1">昭和58年 6月～</span>
              <span class="col-2">国家公務員共済組合連合会横浜南共済病院整形外科医長</span>
            </p>
            <p>
              <span class="col-1">昭和59年 6月～</span>
              <span class="col-2">医療法人松田会松田病院整形外科医長</span>
            </p>
            <p>
              <span class="col-1">昭和62年10月～</span>
              <span class="col-2">杉本整形外科開業</span>
            </p>
            <p>
              <span class="col-1">平成 3年12月～</span>
              <span class="col-2">医療法人孝仁会杉本整形外科 理事長・院長</span>
            </p>
          </template>
        </TextCard>
      </template>
      <template v-slot:right-content>
        <ImageCard src="doctor.jpg" alt="医師" />
      </template>
    </BaseView>
  </div>
</template>

<script lang="ts">
import ImageCard from '@/components/ImageCard.vue';
import TextCard from '@/components/TextCard.vue';
import BaseView from '@/views/BaseView.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TextCard,
    BaseView,
    ImageCard,
  },
})
export default class Guid extends Vue {}
</script>

<style scoped lang="scss">
.col-1 {
  width: 8rem;
  display: inline-block;
}
.col-2 {
  display: inline-block;
}
</style>
