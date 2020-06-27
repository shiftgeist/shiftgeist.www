<script>
  import { darkTheme } from "./stores";
  import Navigation from "./components/Navigation.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";

  let bodyH;
</script>

<svelte:head>
  <meta name="version" comment="__version__" />
</svelte:head>

<div
  class={$darkTheme ? 'text-gray-100 bg-gray-900' : ''}
  bind:clientHeight={bodyH}>
  <div class="container px-4 mx-auto lg:px-8">

    <div class="flex flex-col min-h-screen">
      <Navigation />
      <Header {bodyH} />
    </div>

    <main id="main" />

    <Footer />
  </div>
</div>
