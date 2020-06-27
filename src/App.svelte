<script>
  import { darkTheme } from "./stores";
  import Navigation from "./components/Navigation.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";

  let h;
</script>

<svelte:head>
  <meta name="version" comment="__version__" />
</svelte:head>

<div
  class={$darkTheme ? 'text-gray-100 bg-gray-900' : ''}
  bind:clientHeight={h}>
  <div class="container px-4 mx-auto lg:px-8">

    <div class="flex flex-col min-h-screen">
      <Navigation />
      <Header {h} />
    </div>

    <main id="main" />

    <Footer />
  </div>
</div>
