<script lang="ts">
  import { _ } from 'svelte-i18n';

  export const prerender = true;

  let emoji = true;

  function toggleEmoji(event: Event | KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key !== 'Enter') {
      return;
    }

    emoji = !emoji;
  }
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>

<main>
  <h1>{@html $_('page.home.title')}</h1>

  <h2
    class="emojiwhat link"
    title={$_('action.clickme')}
    tabindex="0"
    on:click={toggleEmoji}
    on:keydown={toggleEmoji}
  >
    {#if emoji}
      {$_('page.home.intro-emoji')}
    {:else}
      {$_('page.home.intro')}
    {/if}
  </h2>
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }

  .emojiwhat {
    cursor: help;
    width: 100%;
  }
</style>
