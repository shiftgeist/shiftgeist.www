<script>
  let entered = false;
  export let link;
  export let name;
</script>

<a
  class="inline-flex justify-center w-10 p-2"
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  title={name}
  on:mouseenter={() => (entered = true)}
  on:mouseleave={() => (entered = false)}>
  {#if entered}
    <slot name="entered" class.hidden={entered} />
  {:else}
    <slot />
  {/if}
</a>
