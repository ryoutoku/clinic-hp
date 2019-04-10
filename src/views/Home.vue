<template>
  <div class="home">
    <BaseView :title="'杉本整形外科のホームページへようこそ'">
      <template v-slot:left-content>
        <TextCard>
          <template v-slot:title>ご紹介</template>
          <template v-slot:content>
            <p>杉本整形外科は高知市にある入院設備を有する整形外科有床診療所です。</p>
            <p>整形外科では高度の腰痛や下肢のギプス固定、高齢者の脊柱圧迫骨折など、 どうしても入院治療が必要な場合があり、 地域医療に少しでも貢献できればとの思いから、有床にこだわって診療しています。</p>
            <p>診療に際してはできるだけ親切な応対、丁寧な説明を心掛けています。</p>
            <p>手術が必要な患者さんや更なる検査を要する場合には、 高知医療センターをはじめ地域の基幹病院に紹介し、 術後はご希望に応じて当院で後療法を行う病診連携を推進しています。</p>
          </template>
        </TextCard>
        <CoursesCard/>
        <TimeCard/>
        <AccessCard/>
      </template>
      <template v-slot:right-content>
        <ImageCard>
          <template v-slot:content>
            <img src="@/assets/appearance.jpg" alt="外観">
          </template>
        </ImageCard>
      </template>
    </BaseView>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextCard from '@/components/TextCard.vue';
import CoursesCard from '@/components/CoursesCard.vue';
import TimeCard from '@/components/TimeCard.vue';
import AccessCard from '@/components/AccessCard.vue';
import ImageCard from '@/components/ImageCard.vue';
import BaseView from '@/views/BaseView.vue';

@Component({
  components: {
    TextCard,
    CoursesCard,
    TimeCard,
    AccessCard,
    ImageCard,
    BaseView
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
</style>
