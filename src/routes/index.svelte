<script>
  import Navigation from "../lib/Navigation.svelte";
  import Footer from "../lib/Footer.svelte";
  import Header from "../lib/Header.svelte";

  let bodyH;
</script>

<svelte:head>
  <meta name="version" comment="__version__" />
</svelte:head>

<div class="dark:(text-gray-100 bg-gray-900)" bind:clientHeight={bodyH}>
  <div
    class="container flex flex-col justify-center min-h-screen px-4 mx-auto lg:px-8"
  >
    <div class="flex flex-col">
      <Navigation />
      <Header {bodyH} />
    </div>

    <main id="main" />

    <Footer />
  </div>
</div>
