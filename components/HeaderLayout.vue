<template>
  <header class="py-4 lg:py-6 px-6 lg:px-8">
    <div
      class="flex justify-between items-center mx-auto max-w-screen-xl h-full"
    >
      <nuxt-link
        to="/"
        class="inline-flex items-center text-gray-800 text-2xl md:text-3xl font-bold gap-2.5"
        aria-label="logo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        Terakoya
      </nuxt-link>
      <NavigationMenu
        :navClasses="['flex', 'gap-12']"
        :linkClasses="[
          'text-gray-600',
          'hover:text-indigo-500',
          'active:text-indigo-700',
          'text-lg',
          'font-semibold',
        ]"
      />
    </div>
    <!-- <HumburgerMenuBtn /> -->
  </header>
</template>
