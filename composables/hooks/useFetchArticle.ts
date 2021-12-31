const ctx = useRuntimeConfig();
import { useState } from '#app';

export default () => {
  const loading = useState('loading', () => false);

  const articleFetch = async (url: string, pickData) => {
    loading.value = true;

    const { data } = await useFetch(url, {
      baseURL: ctx.baseURL,
      headers: {
        'X-MICROCMS-API-KEY': ctx.apiKey,
      },
      pick: pickData,
    });

    loading.value = false;

    return { data };
  };

  return {
    loading,
    articleFetch,
  };
};
