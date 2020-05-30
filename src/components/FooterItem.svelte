<script>
  let entered = false;
  export let link;
  export let name;
</script>

<a
  class="justify-center hidden w-10 px-2 py-8 md:inline-flex"
  href={link}
  on:active={() => (entered = true)}
  on:blur={() => (entered = false)}
  on:focus={() => (entered = true)}
  on:mouseenter={() => (entered = true)}
  on:mouseleave={() => (entered = false)}
  rel="noopener noreferrer"
  target="_blank"
  title={name}>
  {#if entered}
    <slot name="entered" class.hidden={entered} />
  {:else}
    <slot />
  {/if}
</a>

<a
  class="inline-flex justify-center w-10 p-6 md:hidden"
  href={link}
  rel="noopener noreferrer"
  target="_blank"
  title={name}>
  <slot name="entered" />
</a>
