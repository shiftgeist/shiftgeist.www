<template>
  <!-- Primary: teal-500 + zinc-900 -->
  <!-- Error: red-600 -->
  <!-- Success: emerald-500 -->

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-clamp">
    <div class="flex flex-col gap-clamp">
      <span
        data-type="image"
        class="transition-all bg-center trailer-interact bg-100% hover:bg-105% duration-400 hover:opacity-80"
        :style="`background-image: url('https://source.unsplash.com/random?a${i}')`"
        v-for="i in 6"
      >
        <img
          :src="`https://source.unsplash.com/random?a${i}`"
          class="invisible"
        />
      </span>
    </div>
    <div class="flex flex-col gap-clamp">
      <span
        data-type="image"
        class="transition-all bg-center trailer-interact bg-100% hover:bg-105% duration-400 hover:opacity-80"
        :style="`background-image: url('https://source.unsplash.com/random?b${i}')`"
        v-for="i in 6"
      >
        <img
          :src="`https://source.unsplash.com/random?b${i}`"
          class="invisible"
        />
      </span>
    </div>
    <div class="flex flex-col gap-clamp">
      <span
        data-type="image"
        class="transition-all bg-center trailer-interact bg-100% hover:bg-105% duration-400 hover:opacity-80"
        :style="`background-image: url('https://source.unsplash.com/random?c${i}')`"
        v-for="i in 6"
      >
        <img
          :src="`https://source.unsplash.com/random?c${i}`"
          class="invisible"
        />
      </span>
    </div>
    <div class="flex flex-col gap-clamp">
      <span
        data-type="image"
        class="transition-all bg-center trailer-interact bg-100% hover:bg-105% duration-400 hover:opacity-80"
        :style="`background-image: url('https://source.unsplash.com/random?d${i}')`"
        v-for="i in 6"
      >
        <img
          :src="`https://source.unsplash.com/random?d${i}`"
          class="invisible"
        />
      </span>
    </div>
  </div>
</template>
