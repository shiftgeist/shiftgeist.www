<script lang="ts">
  const icons = [
    {
      link: 'https://github.com/shiftgeist',
      icon:
        '<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"><path d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"></path><title>Logo Twitter</title></svg>'
    },
    {
      link: 'https://twitter.com/shiftgeist',
      icon:
        '<svg  focusable="false"  preserveAspectRatio="xMidYMid meet"  xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  width="32"  height="32"  viewBox="0 0 32 32"  aria-hidden="true">  <path    fill-rule="evenodd"    d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"  ></path>  <title>Logo GitHub</title></svg>'
    },
    {
      link: 'mailto:hi@shiftgeist.com',
      icon:
        '<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"><path d="M19,24H4L3.9966,8.9062l11.4341,7.9161a1.0008,1.0008,0,0,0,1.1386,0L28,8.9087,28,18h2V8a2.0027,2.0027,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,8V24a2.0027,2.0027,0,0,0,2,2H19ZM25.7986,8,16,14.7837,6.2014,8Z"></path><circle cx="26" cy="24" r="4"></circle><title>Email new</title></svg>'
    }
  ];

  let theme = '';
  const themes = ['auto', 'dark', 'light'];

  function handleThemeSelect() {
    document.body.classList.add(theme);
    themes.filter((t) => t !== theme).forEach((c) => document.body.classList.remove(c));
  }
</script>

<footer>
  <div class="links">
    {#each icons as { link, icon }, i}
      <a href={link} rel="noopener noreferrer" target="_blank">
        {@html icon}
      </a>
    {/each}
  </div>

  {#if themes}
    <!-- svelte-ignore a11y-no-onchange (otherwise theme switches on blur) -->
    <select class="theme-selector" bind:value={theme} on:change={handleThemeSelect}>
      {#each themes as theme}
        <option value={theme}>{theme}</option>
      {/each}
    </select>
  {/if}
</footer>

<style>
  footer {
    text-align: center;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .links > * {
    display: flex;
    align-items: center;
  }

  .theme-selector {
    margin-top: 1em;
    font-size: var(--font-small);
  }
</style>
