<script>
  import Navigation from './components/Navigation.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Navigation/>

<header class="my-32 xl:my-56">
	<h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
    <p class="text-red-600">Hi! I'm Felix.</p>
    <p>An ui engineer @ <a href="#hosting.de" class="underline hover:text-blue-500">hosting.de</a> working on the future of hosting.</p>
  </h1>
</header>

<main>
  <div class="mb-32 text-gray-500">You shall scroll down</div>

  <!-- #projects -->

  <!-- #blog -->

  <!-- About -->
  <section>
    <h2 class="mb-1 font-serif" id="about">About</h2>
    <p class="mb-6">Es war einmal...</p>

    <div class="mb-8">
      <h3 class="mb-1 font-serif" id="contact">Get In Touch</h3>
      <p class="mb-2">You can contact me via <a href="mailto:shiftgeist@gmail.com" class="underline">email</a>, or reach out thought <a href="https://twitter.com/shiftgeist" target="_blank" rel="noopener noreferrer" class="underline">Twitter</a>.</p>
      <p class="mb-2">
        <a href="https://linkedin.com/in/fhungenberg/" target="_blank" rel="noopener noreferrer" class="mr-4 underline">Linkedin</a>
        <a href="https://dribbble.com/shiftgeist" target="_blank" rel="noopener noreferrer" class="mr-4 underline">Dribbble</a>
        <a href="https://github.com/shiftgeist" target="_blank" rel="noopener noreferrer" class="mr-4 underline">Github</a>
      </p>
    </div>

    <div class="mb-8">
      <h3 class="mb-1 font-serif" id="stack">Stack</h3>
      <p class="mb-2">This website is handcrafted with the unconventional svelte. It uses both Asap and Merriweather typefaces and an awesome icon library called <a href="https://feathericons.com/" target="_blank" rel="noopener noreferrer">feather</a> icons.</p>
      <p class="mb-2">It gets its flair thought tailwind and its speed from the essential purgecss.</p>
    </div>
  </section>
</main>

<Footer/>
