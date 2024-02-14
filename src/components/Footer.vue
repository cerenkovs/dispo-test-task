<template>
  <footer class="w-11/12 my-10 mx-auto flex justify-between items-center font-bold">
    <nav>
      <a v-for="(item, index) in navigation.left" :class="'px-5 py-3 hover:underline' + (index === 0 ? ' -ml-5' : '')" :href="item.href">{{item.name}}</a>
    </nav>

    <a href="javascript:void(0)">
      <img src="/logo/logo-dark.svg" alt="Dispo" class="h-14">
    </a>

    <nav class="flex">
      <a v-for="(item, index) in navigation.right" :class="'px-5 py-3 hover:underline' + (index === navigation.right.length - 1 ? ' -mr-5' : '')" :href="item.href">{{item.name}}</a>
    </nav>
  </footer>
</template>

<script setup>
const navigation = {
  "left": [
    {"name": "Log in", "href": "javascript:void(0)"},
    {"name": "Sign up", "href": "javascript:void(0)"},
    {"name": "Partners", "href": "javascript:void(0)"},
    {"name": "About", "href": "javascript:void(0)"},
    {"name": "FAQ", "href": "javascript:void(0)"},
  ],
  "right": [
    {"name": "Terms of service", "href": "javascript:void(0)"},
    {"name": "Privacy Policy", "href": "javascript:void(0)"},
    {"name": "Cookies", "href": "javascript:void(0)"},
  ],
}
</script>