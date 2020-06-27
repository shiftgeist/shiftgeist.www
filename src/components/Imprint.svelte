<script>
  import { createEventDispatcher } from "svelte";

  import { darkTheme } from "../stores";
  import { XIcon } from "svelte-feather-icons";

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }
</script>

<div
  class="rounded shadow-lg p-4 pr-20 {$darkTheme ? 'bg-gray-800 text-white' : ' bg-white text-black'}">
  <div class="flex justify-between">
    <h1 class="mb-2 font-serif font-semibold">Impressum</h1>
    <button on:click={close} class="absolute top-0 right-0 p-4">
      <XIcon size="1.5x" />
    </button>
  </div>
  <p class="mb-2">Felix Hungenberg</p>
  <p>
    Herrenstr. 68 A
    <br />
    50170 Kerpen
  </p>
</div>
