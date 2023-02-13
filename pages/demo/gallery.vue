<script setup lang="ts">
const loops = ['a', 'b', 'c', 'd']
const gridContainer = ref()
const colSpacesBottom = ref<Array<number>>([])

onMounted(() => {
  setTimeout(() => {
    findBottomSpace()
  }, 1000)
})

useEventListener('scroll', setSpaceBottom)

function findBottomSpace() {
  for (const [index, col] of [...gridContainer.value.children].entries()) {
    const lastElement = col.children[col.children.length - 1]

    const spaceToBottom =
      gridContainer.value.offsetHeight -
      (lastElement.offsetTop + lastElement.offsetHeight)

    colSpacesBottom.value[index] = spaceToBottom
  }
}

function handleOnMouseMove(event: MouseEvent) {
  const { currentTarget } = event
  const target = currentTarget as HTMLElement

  const rect = target.getBoundingClientRect(),
    x = event.clientX - rect.left,
    y = event.clientY - rect.top

  target.style.setProperty('--mouse-x', `${x}px`)
  target.style.setProperty('--mouse-y', `${y}px`)
}

function calculateScrollPercent() {
  const bch = document.documentElement.clientHeight,
    bst = document.documentElement.scrollTop,
    bsh = document.documentElement.scrollHeight

  return bst / (bsh - bch)
}

function setSpaceBottom() {
  const scrollPercent = calculateScrollPercent()

  for (const [index, col] of [...gridContainer.value.children].entries()) {
    const spaceToBottom = colSpacesBottom.value[index]

    if (spaceToBottom) {
      col.style.marginTop = `${(spaceToBottom * scrollPercent).toFixed()}px`
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-4 gap-clamp" ref="gridContainer">
    <div class="flex flex-col gap-clamp" v-for="loop in loops" :key="loop">
      <div
        @mousemove="handleOnMouseMove"
        data-type="image"
        class="transition-all bg-center trailer-interact bg-100% hover:bg-105% duration-400 relative before:absolute before:inset-0 before:z-10 before:w-full before:h-full before:opacity-0 before:transition-opacity before:duration-500 before:hover:opacity-100"
        :style="`background-image: url('https://source.unsplash.com/random?${loop}${i}')`"
        v-for="i in 6"
        :key="i"
      >
        <img
          :src="`https://source.unsplash.com/random?${loop}${i}`"
          class="invisible"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
[data-type='image']::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.1),
    transparent 40%
  );
}
</style>
