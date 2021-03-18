<!-- https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%24layout.svelte -->
<script>
  import { onMount } from "svelte";
  import { theme, themes } from "../stores/theme";
  import "virtual:windi.css";
  // import "lazysizes"; // with images

  onMount(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    theme.set(darkTheme ? themes.dark : themes.light);

    darkTheme.addEventListener("change", (e) => {
      theme.set(e.matches ? themes.dark : themes.light);
      document.body.classList.toggle(themes.dark);
    });
  });
</script>

<svelte:body class={$theme} />

<main>
  <slot />
</main>
