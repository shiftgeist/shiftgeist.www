<script>
  import { theme } from "./stores";

  import Navigation from "./components/Navigation.svelte";
  import Footer from "./components/Footer.svelte";

  import Projects from "./components/Projects.svelte";
</script>

<div class={$theme === 'dark' ? 'text-gray-100 bg-gray-900' : ''}>
  <div class="container px-4 mx-auto lg:px-8">
    <Navigation />

    <header class="my-40 text-5xl lg:my-48 md:text-6xl lg:text-6xl">
      <h1 class="inline font-serif text-red-600">
        Hi, I'm
        <s>Felix</s>
        shiftgeist.
      </h1>
      <h2 class="inline font-serif">
        Breaking the barrier of design and code.
      </h2>
      <a
        href="#main"
        class="block mt-56 text-2xl font-light text-gray-600 hover:text-blue-500">
        See Work Projects
      </a>
    </header>

    <main id="main">
      <!-- <div class="mb-32 text-gray-500">You shall scroll down</div> -->

      <!-- #projects -->
      <Projects />

      <!-- #blog -->

      <!-- About -->
      <section>
        <h2 class="mb-1 font-serif" id="about">About</h2>
        <p class="mb-6">Es war einmal...</p>

        <div class="mb-8">
          <h3 class="mb-1 font-serif" id="contact">Get In Touch</h3>
          <p class="mb-2">
            You can contact me via
            <a href="mailto:shiftgeist@gmail.com" class="underline">email</a>
            , or reach out thought
            <a
              href="https://twitter.com/shiftgeist"
              target="_blank"
              rel="noopener noreferrer"
              class="underline">
              Twitter
            </a>
            .
          </p>
          <p class="mb-2">
            <a
              href="https://linkedin.com/in/fhungenberg/"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4 underline">
              Linkedin
            </a>
            <a
              href="https://dribbble.com/shiftgeist"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4 underline">
              Dribbble
            </a>
            <a
              href="https://github.com/shiftgeist"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4 underline">
              Github
            </a>
          </p>
        </div>

        <div class="mb-8">
          <h3 class="mb-1 font-serif" id="stack">Stack</h3>
          <p class="mb-2">
            This website is handcrafted with the unconventional svelte. It uses
            both Roboto and Noto Serif typefaces and an awesome icon library
            called
            <a
              href="https://feathericons.com/"
              target="_blank"
              rel="noopener noreferrer">
              feather
            </a>
            icons.
          </p>
          <p class="mb-2">
            It gets its flair thought tailwind and its speed from the essential
            purgecss.
          </p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</div>
