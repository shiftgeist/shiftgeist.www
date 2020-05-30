<script>
  import { icons } from "feather-icons";
  import { projects, theme, darkTheme } from "../stores";
  import Logo from "./Logo.svelte";

  function toggleTheme() {
    theme.set($theme === "light" ? "dark" : "light");
  }
</script>

<nav class="container flex items-center justify-between py-4 mx-auto">
  <Logo />

  <div class="items-center hidden text-lg sm:flex">
    <a
      href="https://twitter.com/shiftgeist"
      target="_blank"
      rel="noopener noreferrer"
      class="p-3 hover:text-red-600">
      Twitter
    </a>
    <a
      href="https://github.com/shiftgeist"
      target="_blank"
      rel="noopener noreferrer"
      class="p-3 hover:text-red-600">
      GitHub
    </a>
    <a
      href="https://dribbble.com/shiftgeist"
      target="_blank"
      rel="noopener noreferrer"
      class="p-3 hover:text-red-600">
      Dribbble
    </a>
  </div>

  <button class="p-3 cursor-pointer hover:bg-red-600" on:click={toggleTheme}>
    {#if $darkTheme}
      {@html icons.sun.toSvg()}
    {:else}
      {@html icons.moon.toSvg()}
    {/if}
  </button>
</nav>
