<script lang="ts">
  import { onMount } from 'svelte';
  import { changeFaviconColor } from '../services/favicon';

  import '../app.css';
  import '../services/i18n';

  import Navigation from '$lib/Navigation.svelte';
  import Footer from '$lib/Footer.svelte';

  $: darkTheme = false;
  $: if (darkTheme) {
    changeFaviconColor();
  }

  onMount(() => {
    darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
      darkTheme = matches;
    });
  });
</script>

<svelte:head>
  <!-- <link
    rel="apple-touch-icon"
    sizes="180x180"
    href={`/favicon${darkTheme ? '/dark' : ''}/apple-touch-icon.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href={`/favicon${darkTheme ? '/dark' : ''}/favicon-32x32.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href={`/favicon${darkTheme ? '/dark' : ''}/favicon-16x16.png`}
  />
  <link rel="manifest" href={`/favicon${darkTheme ? '/dark' : ''}/site.webmanifest`} />
  <link
    rel="mask-icon"
    href="/favicon/safari-pinned-tab.svg"
    color={darkTheme ? '#19f9d8' : '#FF506D'}
  />
  <meta name="msapplication-TileColor" content={darkTheme ? '#121212' : '#f6f7f8'} /> -->
</svelte:head>

<Navigation />

<slot />

<Footer />
