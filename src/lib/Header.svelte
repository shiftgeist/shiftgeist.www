<script>
  let barrier = true;
</script>

<header class="flex items-center flex-grow my-16 lg:mb-32">
  <div class="z-10 text-4xl text-center sm:text-5xl lg:text-6xl md:text-left">
    <h1 class="font-serif text-red-600 md:inline">
      Hi, I'm
      <span class="inline-block p-4 -m-4">
        Felix
      </span>
      <span class="line-through">shiftgeist.</span>
    </h1>
    <h2 class="font-serif md:inline">
      <span on:click={() => (barrier = !barrier)}>Breaking the barrier</span>
      of
      {#if barrier}design and code.{:else}designcode.{/if}
    </h2>
  </div>
</header>
