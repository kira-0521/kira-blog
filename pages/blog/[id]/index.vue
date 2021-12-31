<script lang="ts" setup>
import { ResData, Tag } from '../../../composables/types/api/microcmsResponse';
const ctx = useRuntimeConfig();
const route = useRoute();

// 本文
const { data: article } = await useFetch<string, ResData>(
  `/engineer-blog/${route.params.id}`,
  {
    baseURL: ctx.baseURL,
    headers: {
      'X-MICROCMS-API-KEY': ctx.apiKey,
    },
    pick: [
      'id',
      'title',
      'content',
      'createdAt',
      'updatedAt',
      'publishedAt',
      'image',
      'tags',
    ],
  }
);

// タグ
const { data: tags } = await useFetch<string, { contents: Array<Tag> }>(
  '/tags',
  {
    baseURL: ctx.baseURL,
    headers: {
      'X-MICROCMS-API-KEY': ctx.apiKey,
    },
    pick: ['contents'],
  }
);
</script>

<template>
  <MainLayoutWrapper
    :mainClasses="['bg-gray-100', 'mt-20']"
    :inner-classes="['px-4', 'md:px-8']"
  >
    <div
      class="flex justify-between lg:flex-row flex-col sm:gap-x-4 py-6 lg:container mx-auto"
    >
      <div class="bg-white sm:rounded-md shadow lg:w-4/6 max-w-full">
        <div class="px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-left">
            {{ article.title }}
          </h1>

          <Tags :tags="article.tags" :ul-classes="['mt-4', 'ml-2']" />

          <div class="mt-6 w-full mx-auto">
            <div class="font-serif ml-2 flex items-center justify-start">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-2 publishedAt text-gray-600">
                  <time :datetime="article.publishedAt">{{
                    new Date(
                      Date.parse(article.publishedAt)
                    ).toLocaleDateString()
                  }}</time>
                  公開
                </span>
              </div>
              <div class="flex items-center ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span class="ml-2 inline-block publishedAt text-gray-600">
                  <time :datetime="article.updatedAt">{{
                    new Date(Date.parse(article.updatedAt)).toLocaleDateString()
                  }}</time>
                  更新
                </span>
              </div>
            </div>
            <div
              class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8 w-full h-2/4 mt-2"
            >
              <img
                :src="article.image.url"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <div class="w-full">
              <div class="articles" v-html="article.content"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右サイド -->
      <div class="lg:w-2/6 w-full mx-auto mt-6 lg:mt-0">
        <UserCard
          imgSrc="/images/me.png"
          user-name="輝良 / Kira"
          text="HTML, CSS, JavaScript,
              Vueを勉強して、未経験から独学でフロントエンドエンジニアへ転職。
              実務ではTypeScriptとVueを使用。モダンフロントエンド技術が好き。
              当サイトはNuxt3+TS+TailwindCSS+microCMSで構築。"
        />

        <CardWrapper :classes="['bg-white', 'mt-4', 'p-4', 'sticky', 'top-4']">
          <div class="p-4 bg-gray-200 rounded-md">
            <span class="text-2xl font-mono text-gray-800">タグ</span>
          </div>
          <ul class="px-2 lg:px-4 py-8">
            <li v-for="tag in tags.contents" class="inline-block mr-4">
              <nuxt-link
                :to="`/${tag.id}`"
                class="w-full h-full flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-600 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                {{ tag.name }}
              </nuxt-link>
            </li>
          </ul>
        </CardWrapper>
      </div>
    </div>
  </MainLayoutWrapper>
</template>

<style lang="scss" scoped>
:deep(.articles) {
  letter-spacing: 0.5px;
  overflow-wrap: break-word;
  word-break: keep-all;

  > h2 {
    font-size: 28px;
    font-weight: bold;
    color: #1f2437;
    margin: 40px 0 16px;
    position: relative;
    padding-left: 20px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
      width: 6px;
      height: 100%;
      background: #667eea;
    }
  }

  > h3 {
    font-size: 22px;
    font-weight: bold;
    color: #2d3748;
    border-bottom: 1px solid #ddd;
    margin: 15px 0 10px;
  }

  > ul {
    list-style: circle;
    list-style-position: inside;
    margin-left: 35px;

    @media screen and (min-width: 640px) {
      margin-left: 15px;
    }
  }

  > ol {
    list-style: decimal;
    list-style-position: inside;

    margin-left: 35px;

    @media screen and (min-width: 640px) {
      margin-left: 15px;
    }
  }

  > p {
    line-height: 2.4rem;
    letter-spacing: 0.5px;
    color: #1f2437;
    padding: 0 1.5rem;

    @media screen and (min-width: 640px) {
      padding: 0;
    }

    > a {
      color: #0000ee;
      &:hover {
        cursor: pointer;
      }
    }

    > span {
      color: #a0aec0;
    }

    > img {
      @media screen and (min-width: 640px) {
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      overflow: hidden;
    }
  }

  > pre {
    white-space: pre-wrap;
    word-break: break-all;
    > code {
      display: block;
      padding: 1.1em 1.25em; /* 文字周りの余白 */
      color: #444; /* 文字色 */
      background-color: #e7edf3; /* 背景色 */
      border-radius: 3px; /* 角丸 */
      border: solid 1px #d6dde4; /* 枠線 */
      overflow-wrap: break-word;
    }
  }

  > blockquote {
    margin-top: 45px;
    position: relative;
    padding: 35px 15px 10px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: #f5f5f5;
    color: #777777;
    border-left: 4px solid #a3bffa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);

    &::before {
      display: inline-block;
      position: absolute;
      top: 5px;
      left: 3px;
      content: '“';
      font-family: sans-serif;
      color: #a3bffa;
      font-size: 90px;
      line-height: 1;
    }
  }
}
</style>
