<script setup lang="ts">
type TrailerType = 'menu' | 'image' | 'link'

const trailer = ref<HTMLElement>()
const trailerType = ref<TrailerType>('link')

const dataTypeIconMap: { [key in TrailerType]: string } = {
  link: 'mdi:external-link',
  image: 'mdi:image',
  menu: 'mdi:menu',
}

const dataTypeSizeMap: { [key in TrailerType]: number } = {
  link: 6,
  image: 6,
  menu: 4,
}

function animateTrailer(event: MouseEvent, scale: boolean) {
  if (!trailer.value) return

  const x = event.clientX - trailer.value.offsetWidth / 2 // 10 // from w-5 h-5
  const y = event.clientY - trailer.value.offsetHeight / 2 // 10 // from w-5 h-5

  trailer.value.animate(
    {
      transform: `translate(${x}px, ${y}px) scale(${
        scale ? dataTypeSizeMap[trailerType.value] : 1
      })`,
    },
    { duration: 800, fill: 'forwards' }
  )
}

useEventListener('mousemove', event => {
  if (!trailer.value) return

  const interactive = (event.target as HTMLElement).closest(
      '.trailer-interact'
    ) as HTMLElement,
    interacting = interactive !== null

  animateTrailer(event, interacting)

  trailer.value.dataset.type = interacting ? interactive.dataset.type : ''

  if (interacting) {
    trailerType.value = interactive.dataset.type as TrailerType
  }
})
</script>

<template>
  <div
    id="trailer"
    ref="trailer"
    class="fixed left-0 right-0 z-50 grid w-5 h-5 transition-opacity duration-500 bg-teal-100 rounded-full pointer-events-none place-items-center"
  >
    <Icon
      id="trailerIcon"
      ref="trailerIcon"
      :name="dataTypeIconMap[trailerType]"
      class="absolute w-2 transition-opacity opacity-0 text-zing-900 duration-400"
    />
  </div>
</template>

<style>
body #trailer {
  @apply opacity-0;
}

body:hover #trailer {
  @apply opacity-100;
}

#trailer:not([data-type='']) > #trailerIcon {
  @apply opacity-100;
}
</style>
