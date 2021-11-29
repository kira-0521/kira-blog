<template>
  <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto mt-20">
    <div
      class="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6"
    >
      <NavigationMenu
        :navClasses="[
          'flex',
          'flex-wrap',
          'justify-center',
          'md:justify-start',
          'gap-x-4',
          'gap-y-2',
          'md:gap-6',
        ]"
        :linkClasses="[
          'text-gray-500',
          'hover:text-indigo-500',
          'active:text-indigo-600',
        ]"
      />

      <SnsNav />
    </div>

    <div class="text-gray-400 text-sm text-center py-8">
      © 2021 - Kira Tanaka. All rights reserved.
    </div>
  </footer>
</template>
