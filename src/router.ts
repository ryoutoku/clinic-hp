import Vue from 'vue';
import Router from 'vue-router';
import Access from './views/Access.vue';
import Care from './views/Care.vue';
import Doctor from './views/Doctor.vue';
import Guide from './views/Guide.vue';
import Home from './views/Home.vue';
import PageNotFound from './views/PageNotFound.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';
// import Information from './views/Information.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'ホーム',
        desc: '高知県高知市高須の杉本整形外科は入院設備を有する整形外科有床診療所です。診療科目:整形外科 リウマチ科 リハビリテーション科◇休診日:日曜/祝日◇午後休診:木曜/土曜◇診療時間 9:00～12:00 / 14:00～17:30。',
      },
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide,
      meta: {
        title: '院内案内',
        desc: '診療科目は整形外科、リウマチ科、リハビリテーション科。専門外来はリウマチ、腰痛、膝関節。検診として骨粗しょう症検診を実施。ジェネリック医薬品、漢方処方の取り扱いをしています。',
      },
    },
    {
      path: '/care',
      name: 'care',
      meta: {
        title: '診療案内',
        desc: '診療時間は9:00～12:00 / 14:00～17:30です。木曜・土曜は午後休診です。日曜・祝日は休診です。予約診療は行っていません。受付は午前7時より受付簿にて行っており、診療は受付順となります。',
      },
      component: Care,
    },
    {
      path: '/doctor',
      name: 'doctor',
      meta: {
        title: '医師紹介',
        desc: '院長 医学博士 杉本 康三。日本整形外科学会 整形外科専門医。財団法人 日本リウマチ財団 リウマチ登録医。高齢者の膝の痛みの原因である変形性膝関節症の治療に力を注いでいます。',
      },
      component: Doctor,
    },
    {
      path: '/access',
      name: 'access',
      meta: {
        title: 'アクセス',
        desc: 'とさでん交通後免線 新木停留所より南へ400m。専用駐車場があるため車でのアクセスも可能です。',
      },
      component: Access,
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      meta: {
        title: 'プライバシーポリシー',
        desc: 'プライバシーポリシー',
      },
      component: PrivacyPolicy,
    },
    {
      // PageNotFound
      // SSR用に404.htmlを生成するために指定
      // URIを直接指定されない限りアクセスはしない
      path: '/pageNotFound',
      name: 'notFound',
      meta: {
        title: 'お探しのページは見つかりませんでした。',
        desc: 'お探しのページは見つかりませんでした。',
      },
      component: PageNotFound,
    },
    {
      // リダイレクト用
      // ローカル実行時のみの挙動
      // デプロイ時はSSRにより404.htmlにアクセスすることになるため、実際はアクセスされない
      path: '/*',
      name: 'notFoundAll',
      meta: {
        title: 'お探しのページは見つかりませんでした。',
        desc: 'お探しのページは見つかりませんでした。',
      },
      component: PageNotFound,
    },
    /*
    // information表示用
    // 必要に応じてコメントを外す
    {
      path: '/information',
      name: 'information',
      meta: {
        title: 'お知らせ',
        desc: 'お知らせ',
      },
      component: Information,
    },
    */
  ],
});

export default router;
