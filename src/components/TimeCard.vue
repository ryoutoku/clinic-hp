<template>
  <div class="time-card">
    <TextCard>
      <template v-slot:title>診療時間</template>
      <template v-slot:content>
        <div class="table-container">
          <table class="table is-bordered is-narrow is-hoverable">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">月</th>
                <th scope="col">火</th>
                <th scope="col">水</th>
                <th scope="col">木</th>
                <th scope="col">金</th>
                <th scope="col">土</th>
                <th scope="col">日</th>
                <th scope="col">祝日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  09:00
                  <br />～ <br />12:00
                </th>
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
                <th scope="row">
                  14:00
                  <br />〜 <br />17:30
                </th>
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
import TextCard from '@/components/TextCard.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TextCard,
  },
})
export default class TimeCard extends Vue {}
</script>

<style scoped lang="scss">
table {
  & th {
    text-align: center !important;
    vertical-align: middle;
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

table,
th,
td {
  border-color: gray !important;
}
</style>
