<template>
  <div class="guid">
    <BaseView :title="'院内案内'">
      <template v-slot:left-content>
        <CoursesCard />
        <TextCard>
          <template v-slot:title>専門外来</template>
          <template v-slot:content>
            <p>リウマチ 腰痛 膝関節</p>
          </template>
        </TextCard>
        <TextCard>
          <template v-slot:title>検診</template>
          <template v-slot:content>
            <p>骨粗しょう症検診</p>
          </template>
        </TextCard>
        <TextCard>
          <template v-slot:title>薬の処方</template>
          <template v-slot:content>
            <p>院外処方を行っています。</p>
            <p>ジェネリック医薬品 積極的に案内しています。</p>
            <p>漢方処方の取り扱いをしています。</p>
          </template>
        </TextCard>
      </template>
      <template v-slot:right-content>
        <ImageCard src="room_1.jpg" alt="内観1" />
        <ImageCard src="room_2.jpg" alt="内観2" />
        <ImageCard src="room_3.jpg" alt="内観3" />
      </template>
    </BaseView>
  </div>
</template>

<script lang="ts">
import CoursesCard from '@/components/CoursesCard.vue';
import ImageCard from '@/components/ImageCard.vue';
import TextCard from '@/components/TextCard.vue';
import BaseView from '@/views/BaseView.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TextCard,
    CoursesCard,
    ImageCard,
    BaseView,
  },
})
export default class Guid extends Vue {}
</script>

<style scoped lang="scss"></style>
