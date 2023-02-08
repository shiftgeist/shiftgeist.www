<template>
  <div class="min-h-screen bg-zinc-900">
    <MouseTrailer />
    <SiteHeader />
    <slot />
    <SiteMenu />
    <SiteFooter />
  </div>
</template>

<style>
[data-gradient-active='true'] .gradient-fill {
  @apply fill-teal-600;
}
</style>
