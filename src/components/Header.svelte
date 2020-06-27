<script>
  import { onMount } from "svelte";

  import { scrollto } from "svelte-scrollto";
  import { MousePointerIcon } from "svelte-feather-icons";

  export let h = 0;

  let strike = 0;
  let barrier = true;
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<header class="flex items-center flex-grow my-16 lg:mb-32">
  <div class="text-4xl text-center sm:text-5xl lg:text-6xl md:text-left">
    <h1 class="font-serif text-red-600 md:inline">
      Hi, I'm
      <span
        title="Felix Hungenberg"
        on:mouseenter={() => (strike = 1)}
        class:line-through={strike !== 1}>
        Felix
      </span>
      <span
        on:mouseenter={() => (strike = 0)}
        class:line-through={strike !== 0}>
        shiftgeist.
      </span>
    </h1>
    <h2 class="font-serif md:inline">
      <span on:click={() => (barrier = !barrier)}>Breaking the barrier</span>
      of
      {#if barrier}design and code.{:else}designcode.{/if}
    </h2>
  </div>
</header>

{#if h > 2000}
  <div class="flex justify-center mb-8">
    <span
      use:scrollto={'#main'}
      class="cursor-pointer"
      style="transform: rotate({Math.min(y * 0.35 - 135, 45)}deg); opacity: {1 - y * 0.001};">
      <MousePointerIcon size="1.5x" />
    </span>
  </div>
{/if}
