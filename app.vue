<script lang="ts" setup>
import './assets/css/tailwind.css';

useMeta({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content:
        'フロントエンドエンジニアとしてのTipsやプログラミング初心者のためのノウハウを記事にしています。',
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'Terakoya',
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
  ],
});
</script>

<template>
  <Html lang="ja">
    <Head>
      <Title>Terakoya</Title>
      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  </Html>
  <HeaderLayout />
  <NuxtPage />
  <FooterLayout />
</template>
