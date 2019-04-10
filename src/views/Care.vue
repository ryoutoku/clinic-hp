<template>
  <div class="care">
    <BaseView :title="'診療案内'">
      <template v-slot:left-content>
        <TimeCard>
          <p>木曜・土曜は午後休診です。</p>
          <p>日曜・祝日は休診です。</p>
          <p>予約診療は行っていません。</p>
          <p>受付は午前7時より受付簿にて行っており、診療は受付順となります。</p>
          <p>初診の方には問診表への記載をお願いしています。</p>
        </TimeCard>
      </template>
      <template v-slot:right-content>
        <ImageCard>
          <template v-slot:content>
            <img src="@/assets/exam_room.jpg" alt="診療室">
          </template>
        </ImageCard>
      </template>
    </BaseView>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeCard from '@/components/TimeCard.vue';
import CoursesCard from '@/components/CoursesCard.vue';
import BaseView from '@/views/BaseView.vue';
import ImageCard from '@/components/ImageCard.vue';

@Component({
  components: {
    TimeCard,
    CoursesCard,
    BaseView,
    ImageCard
  }
})
export default class Care extends Vue {}
</script>

<style scoped lang="scss">
</style>
