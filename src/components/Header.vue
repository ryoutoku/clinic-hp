<template>
  <div class="header">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div class="columns is-centered">
          <div class="column is-narrow">
            <h2 class="title is-4 sub">医療法人 孝仁会</h2>
            <h2 class="title is-2 main">
              <router-link to="/">杉本整形外科</router-link>
            </h2>
          </div>
          <div class="column">
            <h2 class="subtitle header-right is-6">
              <p>整形外科 リウマチ科 リハビリテーション科</p>
              <p>高知県高知市高須2丁目18−19</p>
              <p>電話番号：088-884-5100</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="columns navigation is-vcentered is-centered">
      <div class="column">
        <nav class="columns is-vcentered is-centered">
          <div class="column is-narrow">
            <router-link class="router subtitle is-4" to="/">ホーム</router-link>
          </div>
          <!--
          <div class="column is-narrow">
            <router-link class="router subtitle is-4" to="/information">お知らせ</router-link>
          </div>
          -->
          <div class="column is-narrow">
            <router-link class="router subtitle is-4" to="/guide">院内案内</router-link>
          </div>
          <div class="column is-narrow">
            <router-link class="router subtitle is-4" to="/care">診療案内</router-link>
          </div>
          <div class="column is-narrow">
            <router-link class="router subtitle is-4" to="/doctor">医師紹介</router-link>
          </div>
          <div class="column is-narrow">
            <router-link class="router subtitle is-4" to="/access">アクセス</router-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  padding-top: 1.5rem;
}
.columns {
  vertical-align: bottom;
}

.column {
  align-self: flex-end;
}

.header-right {
  text-align: left;
  margin: 0 1.5rem;
}

.sub {
  text-align: left;
  margin-bottom: 0;
}

.main {
  text-shadow: 5px 5px 1px #ccf;
}

.navigation {
  margin: 0;
  vertical-align: middle;
}

.navigation .columns {
  padding: 0 !important;
}

nav {
  background-color: hsl(217, 71%, 53%);
  padding: -0.5rem 0;
  & .column {
    background-color: hsl(217, 71%, 53%);
    border-left: solid 1px #2c3e50;
    border-right: solid 1px #2c3e50;
    margin-right: -1px;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 100%;
    &:hover {
      background-color: hsl(204, 86%, 53%);
    }
    a {
      color: white;
      display: block !important;
      padding: 12px 2rem;
      margin: -12px -2rem;
      &.router-link-exact-active {
        color: black;
      }
    }
  }
}

.router {
  font-weight: bold;
}
</style>
