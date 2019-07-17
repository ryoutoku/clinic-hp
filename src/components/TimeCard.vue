<template>
  <div class="time-card">
    <TextCard>
      <template v-slot:title>診療時間</template>
      <template v-slot:content>
        <div class="table-wrapper">
          <table class="table is-bordered is-narrow is-hoverable">
            <thead>
              <tr>
                <th></th>
                <th>月</th>
                <th>火</th>
                <th>水</th>
                <th>木</th>
                <th>金</th>
                <th>土</th>
                <th>日</th>
                <th>祝日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  09:00
                  <br />～
                  <br />12:00
                </td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>×</td>
                <td>×</td>
              </tr>
              <tr>
                <td>
                  14:00
                  <br />〜
                  <br />17:30
                </td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>×</td>
                <td>○</td>
                <td>×</td>
                <td>×</td>
                <td>×</td>
              </tr>
            </tbody>
          </table>
        </div>
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
export default class TimeCard extends Vue {}
</script>

<style scoped lang="scss">
.table-wrapper {
  overflow-x: scroll;
}

table {
  & th {
    text-align: center;
  }

  & th:nth-child(n + 8) {
    color: red;
  }

  & th:nth-child(7) {
    color: blue;
  }

  & td {
    text-align: center;
    vertical-align: middle;
  }

  & td:not(:first-child) {
    font-size: 1.5rem;
    font-weight: bold;
  }
  margin-bottom: 1.5rem;
}
</style>
