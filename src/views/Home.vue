<template>
  <div class="home">
    <BaseView :title="'杉本整形外科のホームページへようこそ'">
      <template v-slot:left-content>
        <TextCard>
          <template v-slot:title>基本理念</template>
          <template v-slot:content>
            <p>
              地域のかかりつけ医として、肩、腰、膝の痛みを伴う骨関節疾患、骨折、捻挫などの外傷、骨粗鬆症への対応など、運動器の疾患に幅広く対応しています。
            </p>
            <p>
              手術が必要な患者さんや、さらなる検査を要する場合には、高知医療センターをはじめ地域の基幹病院に紹介することで、病診連携を推進しています。
            </p>
            <p>診療に際しては、できるだけ親切な応対、丁寧な説明を心掛けています。</p>
          </template>
        </TextCard>
        <CoursesCard />
        <TimeCard />
        <AccessCard />
      </template>
      <template v-slot:right-content>
        <ImageCard>
          <template v-slot:content>
            <img src="@/assets/appearance.jpg" alt="外観" />
          </template>
        </ImageCard>
      </template>
    </BaseView>
  </div>
</template>

<script lang="ts">
import AccessCard from '@/components/AccessCard.vue';
import CoursesCard from '@/components/CoursesCard.vue';
import ImageCard from '@/components/ImageCard.vue';
import TextCard from '@/components/TextCard.vue';
import TimeCard from '@/components/TimeCard.vue';
import BaseView from '@/views/BaseView.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TextCard,
    CoursesCard,
    TimeCard,
    AccessCard,
    ImageCard,
    BaseView,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss"></style>
