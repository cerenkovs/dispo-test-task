<template>
  <header class="mt-16 flex justify-between w-11/12 mx-auto font-semibold">
    <nav class="flex items-center text-dispo-darkerGray text-sm">
      <a href="javascript:void(0)" class="mr-12">
        <img src="/logo/logo.svg" alt="Dispo" class="h-14">
      </a>

      <a v-for="item in quick_switchers" :href="item.href"
        class="flex items-center p-3 px-4 hover:underline hover:brightness-0">
        <span>{{ item.name }}</span>
        <img :src="item.icon" class="inline ml-3 h-6" alt="">
      </a>
    </nav>

    <nav class="flex items-center font-bold">
      <a v-for="(item, index) in navigation_main"
        :class="'p-3 hover:underline ' + item.class + (index === navigation_main.length - 1 ? ' -mr-3' : '')"
        :href="item.href">{{ item.name }}</a>
    </nav>
  </header>
</template>

<script setup>
const quick_switchers = [
  { "name": "EUR", "href": "javascript:void(0)", "icon": "/icons/switch-currency.svg" },
  { "name": "English", "href": "javascript:void(0)", "icon": "/icons/globe.svg" },
]

const navigation_main = [
  { "name": "Transport", "href": "javascript:void(0)", "class": "text-dispo-blue" },
  { "name": "Tours", "href": "javascript:void(0)", "class": "" },
  { "name": "Partners", "href": "javascript:void(0)", "class": "" },
  { "name": "About B2B", "href": "javascript:void(0)", "class": "" },
  { "name": "Contact", "href": "javascript:void(0)", "class": "" },
  { "name": "Book today", "href": "javascript:void(0)", "class": "text-white bg-dispo-darkBlue hover:bg-dispo-darkerBlue rounded-full py-2 px-8 mx-3 hover:no-underline" },
  { "name": "Log in / Sign up", "href": "javascript:void(0)", "class": "" },
]
</script>