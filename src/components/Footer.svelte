<script>
  import { darkTheme } from "../stores";
  import {
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    PlayIcon,
    TwitterIcon,
    GitCommitIcon,
  } from "svelte-feather-icons";

  import FooterItem from "./FooterItem.svelte";
  import Imprint from "./Imprint.svelte";

  let legalOpen = false;
</script>

<footer
  class="flex flex-col-reverse py-4 mt-16 text-lg text-gray-500 sm:items-center sm:justify-between sm:flex-row">
  <span class="inline-block mt-4 sm:mt-0">
    <span title="Version __version__">©{new Date().getFullYear()}</span>
    Felix Hungenberg
  </span>

  <div class="flex justify-between -m-2 sm:block">
    <span class="relative inline-flex items-center">
      <button
        class="p-2 mr-4 pointer"
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

    <span>
      <FooterItem link="mailto:hi@shiftgeist.com" name="Mail">
        M
        <span slot="entered">
          <MailIcon class="inline" />
        </span>
      </FooterItem>
      <FooterItem link="https://twitter.com/shiftgeist" name="Tweets">
        T
        <span slot="entered">
          <TwitterIcon class="inline" />
        </span>
      </FooterItem>
      <FooterItem link="https://linkedin.com/in/fhungenberg" name="Connect">
        L
        <span slot="entered">
          <LinkedinIcon class="inline" />
        </span>
      </FooterItem>
      <FooterItem link="https://dribbble.com/shiftgeist" name="Dribbble">
        D
        <span slot="entered">
          <PlayIcon class="inline" />
        </span>
      </FooterItem>
      <FooterItem link="https://github.com/shiftgeist" name="GitHub">
        G
        <span slot="entered">
          <GithubIcon class="inline" />
        </span>
      </FooterItem>
    </span>
  </div>
</footer>
