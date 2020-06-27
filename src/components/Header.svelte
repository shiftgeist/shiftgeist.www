<script>
  import { fade } from "svelte/transition";
  import { scrollto } from "svelte-scrollto";
  import { MousePointerIcon } from "svelte-feather-icons";

  export let bodyH = 0;

  let barrier = true;
  let y = 0;
  let name = { visible: false, x: 0, y: 0 };

  function handleNameMove(e) {
    name.x = e.clientX - 50;
    name.y = e.clientY + 40;
    name.visible = true;
  }

  function handleNameLeave() {
    name.visible = false;
  }
</script>

<svelte:window bind:scrollY={y} />

<header class="flex items-center flex-grow my-16 lg:mb-32">
  {#if name.visible}
    <img
      alt="Felix"
      class="fixed transform -translate-y-full opacity-75 pointer-events-none"
      src="assets/face.png"
      style={`left: ${name.x}px; top: ${name.y}px;`}
      transition:fade={{ duration: 150 }}
      id="face" />
  {/if}

  <div class="z-10 text-4xl text-center sm:text-5xl lg:text-6xl md:text-left">
    <h1 class="font-serif text-red-600 md:inline">
      Hi, I'm
      <span
        class="inline-block p-4 -m-4"
        title="Felix Hungenberg"
        on:mousemove={handleNameMove}
        on:mouseleave={handleNameLeave}>
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

{#if bodyH > 2000}
  <div class="flex justify-center mb-8">
    <span
      use:scrollto={'#main'}
      class="cursor-pointer"
      style="transform: rotate({Math.min(y * 0.35 - 135, 45)}deg); opacity: {1 - y * 0.001};">
      <MousePointerIcon size="1.5x" />
    </span>
  </div>
{/if}
