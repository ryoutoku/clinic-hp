<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <div class="contents">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <footer>(c) 医療法人 孝仁会 杉本整形外科</footer>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router/types';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
  private created() {
    const to = this.$route;
    this.createPageTitle(to as Route);
  }

  @Watch('$route')
  private changeRoute(to: Route, from: Route) {
    this.createPageTitle(to);
  }

  private createPageTitle(to: Route) {
    // タイトルを設定
    if (to.meta === undefined) {
      return;
    }

    const displayBase = '医療法人 孝仁会 杉本整形外科';

    if (to.meta.title) {
      document.title = to.meta.title + ' | ' + displayBase;
    } else {
      document.title = displayBase;
    }

    // メタタグdescription設定
    const element = document.querySelector('meta[name="description"]');
    if (element === null) {
      return;
    }

    if (to.meta.desc) {
      element.setAttribute('content', to.meta.desc);
    } else {
      element.setAttribute('content', displayBase);
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3;
  margin: 0;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}

hr {
  background-color: hsl(204, 86%, 53%);
  border: 0;
  height: 2px;
  width: 95%;
  margin: auto;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

h1 {
  display: none;
}

.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.contents {
  flex: 1;
}

img {
  width: 100%;
  border: 2px solid hsl(204, 86%, 53%);
  border-radius: 0.5rem;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
}

footer {
  padding-bottom: 1rem;
}
</style>
