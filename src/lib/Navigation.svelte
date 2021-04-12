<script>
  import { locale, locales } from 'svelte-i18n';

  import Logo from './Logo.svelte';

  // Direction matters
  const links = {
    Twitter: 'https://twitter.com/shiftgeis',
    Github: 'https://github.com/shiftgeist'
  };

  const langMap = {
    de: '🇩🇪',
    en: '🇺🇸'
  };
</script>

<nav>
  <Logo />

  <div class="nav-list">
    {#each Object.keys(links) as name}
      <a href={links[name]} rel="noopener noreferrer" target="_blank">{name}</a>
    {/each}

    <select bind:value={$locale}>
      {#each $locales as locale}
        <option value={locale}>{langMap[locale]}</option>
      {/each}
    </select>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-list {
    display: flex;
    gap: 1.618em;
  }
</style>
