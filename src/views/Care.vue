<template>
  <div class="care">
    <BaseView :title="'診療案内'">
      <template v-slot:left-content>
        <TimeCard />
        <TextCard>
          <template v-slot:title>診療受付</template>
          <template v-slot:content>
            <p>木曜・土曜は午後休診です。日曜・祝日は休診です。</p>
            <p>
              受付は午前7時より当院窓口受付にて行っておりますので、受付簿にお名前をご記入ください。診療は受付順となります。
            </p>
            <p>予約診療は行っていません。</p>
            <p>初診の方には、診療前に問診表へのご記入をお願いしています。</p>
          </template>
        </TextCard>
      </template>
      <template v-slot:right-content>
        <ImageCard>
          <template v-slot:content>
            <img src="@/assets/exam_room.jpg" alt="診療室" />
          </template>
        </ImageCard>
      </template>
    </BaseView>
  </div>
</template>

<script lang="ts">
import CoursesCard from '@/components/CoursesCard.vue';
import ImageCard from '@/components/ImageCard.vue';
import TextCard from '@/components/TextCard.vue';
import TimeCard from '@/components/TimeCard.vue';
import BaseView from '@/views/BaseView.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TimeCard,
    TextCard,
    CoursesCard,
    BaseView,
    ImageCard,
  },
})
export default class Care extends Vue {}
</script>

<style scoped lang="scss"></style>
