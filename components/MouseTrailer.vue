<script setup lang="ts">
const trailer = ref(),
  trailerType = ref<string>('link')

const dataTypeIconMap = {
  link: 'mdi:external-link',
  image: 'mdi:image',
  menu: 'mdi:menu',
}

function animateTrailer(e: MouseEvent, scale: boolean) {
  const x = e.clientX - trailer.value.offsetWidth / 2 // 10 // from w-5 h-5
  const y = e.clientY - trailer.value.offsetHeight / 2 // 10 // from w-5 h-5

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${scale ? 6 : 1})`,
  }

  trailer.value.animate(keyframes, { duration: 800, fill: 'forwards' })
}

useEventListener('mousemove', e => {
  if (!trailer.value) return

  const interactive = (e.target as Element).closest('.trailer-interact'),
    interacting = interactive !== null

  animateTrailer(e, interacting)

  trailer.value.dataset.type = interacting
    ? (interactive as HTMLElement).dataset.type
    : ''

  if (interacting) {
    trailerType.value = (interactive as HTMLElement).dataset.type as string
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
