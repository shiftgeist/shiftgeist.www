<script setup lang="ts">
const menuOpen = ref(false)
</script>

<template>
  <nav class="fixed inset-x-0 bottom-0 z-30 flex justify-center pb-6 group">
    <button
      @click="menuOpen = !menuOpen"
      data-type="menu"
      class="trailer-interact w-24 h-24 transition-all duration-300 ease-out rounded-[50%] hover:scale-125 active:scale-90 hover:rounded-none shadow-sm hover:shadow-xl"
      :class="[
        menuOpen
          ? 'bg-red-100 active:bg-red-600'
          : 'bg-teal-100 active:bg-teal-600',
      ]"
    >
      &nbsp;
    </button>
  </nav>
</template>
