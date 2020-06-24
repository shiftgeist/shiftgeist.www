<script>
  const tools = [
    {
      name: "svelte",
      orga: "sveltejs",
      hover: false,
    },
    {
      name: "tailwindcss",
      orga: "tailwindcss",
      hover: false,
    },
    {
      name: "feather",
      orga: "feathericons",
      hover: false,
    },
  ];
</script>

<section class="my-40">
  <h2 class="mb-4 font-serif text-2xl">Tools used to build this website</h2>

  <div class="grid gap-12 sm:grid-cols-4">
    {#each tools as { name, orga, hover }}
      <a
        href="http://github.com/{orga}/{name}#readme"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center"
        on:mouseenter={() => (hover = true)}
        on:mouseleave={() => (hover = false)}
        style="filter: grayscale({hover ? 0 : 100}%)">
        <img
          src="assets/tools/{name}.svg"
          alt={name}
          title={name}
          class="object-contain object-center w-full h-auto mx-auto" />
      </a>
    {/each}
  </div>
</section>
