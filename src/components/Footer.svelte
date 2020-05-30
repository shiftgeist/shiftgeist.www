<script>
  import { darkTheme } from "../stores";
  import FooterItem from "./FooterItem.svelte";
  import { icons } from "feather-icons";

  let legalOpen = false;
</script>

<footer class="flex items-center justify-between py-8 mt-16 text-gray-500">
  <span>©{new Date().getFullYear()} Felix Hungenberg</span>

  <div class="-m-2 text-lg">
    <span class="relative">
      <button
        class="p-2 mr-4 pointer"
        on:click={() => (legalOpen = !legalOpen)}>
        Legal
      </button>
      {#if legalOpen}
        <div
          class="absolute mb-12 rounded shadow-lg left-1/2 bottom-0 p-4 pr-20
          transform -translate-x-1/2 modal {$darkTheme ? 'bg-gray-800 text-white' : ' bg-white text-black'}">
          <div class="flex justify-between">
            <h1 class="mb-2 font-serif text-xl">Impressum</h1>
            <button
              on:click={() => (legalOpen = false)}
              class="absolute top-0 right-0 p-4">
              {@html icons.x.toSvg()}
            </button>
          </div>
          <p class="whitespace-no-wrap">Felix Hungenberg</p>
          <p class="whitespace-no-wrap">Herrenstr. 68 A</p>
          <p class="whitespace-no-wrap">50170 Kerpen</p>
        </div>
      {/if}
    </span>

    <FooterItem link="mailto:hi@shiftgeist.com" name="Mail">
      <span>M</span>
      <span slot="entered">
        {@html icons.mail.toSvg({ class: 'inline' })}
      </span>
    </FooterItem>
    <FooterItem link="https://twitter.com/shiftgeist" name="Tweets">
      <span>T</span>
      <span slot="entered">
        {@html icons.twitter.toSvg({ class: 'inline' })}
      </span>
    </FooterItem>
    <FooterItem link="https://linkedin.com/in/fhungenberg" name="Connect">
      <span>L</span>
      <span slot="entered">
        {@html icons.linkedin.toSvg({ class: 'inline' })}
      </span>
    </FooterItem>
    <FooterItem link="https://dribbble.com/shiftgeist" name="Dribbble">
      <span>D</span>
      <span slot="entered">
        {@html icons.play.toSvg({ class: 'inline' })}
      </span>
    </FooterItem>
    <FooterItem link="https://github.com/shiftgeist" name="GitHub">
      <span>G</span>
      <span slot="entered">
        {@html icons.github.toSvg({ class: 'inline' })}
      </span>
    </FooterItem>
  </div>
</footer>
