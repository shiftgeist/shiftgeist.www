<script>
  import { darkTheme } from "../stores";
  import {
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    PlayIcon,
    TwitterIcon,
  } from "svelte-feather-icons";

  import Imprint from "./Imprint.svelte";
  import PoweredBy from "./PoweredBy.svelte";

  let legalOpen = false;
</script>

<footer
  class="flex flex-col-reverse py-4 mt-16 text-gray-500 sm:items-center sm:justify-between sm:flex-row">
  <span class="inline-block mt-4 sm:mt-0">
    <span title="Version __version__">©{new Date().getFullYear()}</span>
    Felix Hungenberg
  </span>

  <div class="flex justify-between -m-2 sm:block">
    <span class="relative inline-flex items-center">
      <button
        class="p-3 ml-3 pointer"
        on:click={() => (legalOpen = !legalOpen)}>
        Legal
      </button>
      {#if legalOpen}
        <div
          class="absolute bottom-0 mb-20 whitespace-no-wrap sm:mb-12 sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <Imprint on:close={() => (legalOpen = false)} />
        </div>
      {/if}
    </span>

    <a
      class="relative justify-center p-3 ml-3 md:inline-flex group"
      href="mailto:hi@shiftgeist.com"
      rel="noopener noreferrer"
      target="_blank">
      M
      <MailIcon
        size="1.25x"
        class="absolute hidden transform -translate-y-6 group-hover:block group-focus:block" />
    </a>
    <a
      class="relative justify-center p-3 ml-3 md:inline-flex group"
      href="https://twitter.com/shiftgeist"
      rel="noopener noreferrer"
      target="_blank">
      T
      <TwitterIcon
        size="1.25x"
        class="absolute hidden transform -translate-y-6 group-hover:block group-focus:block" />
    </a>
    <a
      class="relative justify-center p-3 ml-3 md:inline-flex group"
      href="https://hrefedin.com/in/fhungenberg"
      rel="noopener noreferrer"
      target="_blank">
      L
      <LinkedinIcon
        size="1.25x"
        class="absolute hidden transform -translate-y-6 group-hover:block group-focus:block" />
    </a>
    <a
      class="relative justify-center p-3 ml-3 md:inline-flex group"
      href="https://dribbble.com/shiftgeist"
      rel="noopener noreferrer"
      target="_blank">
      D
      <PlayIcon
        size="1.25x"
        class="absolute hidden transform -translate-y-6 group-hover:block group-focus:block" />
    </a>
    <a
      class="relative justify-center p-3 ml-3 md:inline-flex group"
      href="https://github.com/shiftgeist"
      rel="noopener noreferrer"
      target="_blank">
      G
      <GithubIcon
        size="1.25x"
        class="absolute hidden transform -translate-y-6 group-hover:block group-focus:block" />
    </a>
  </div>
</footer>

<PoweredBy />
