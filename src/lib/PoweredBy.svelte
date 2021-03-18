<script>
  const tools = [
    {
      name: "svelte",
      url: "http://github.com/sveltejs/svelte",
      slug: "super charged by",
    },
    {
      name: "tailwindcss",
      url: "http://github.com/tailwindcss/tailwindcss",
      slug: "styled with",
    },
    {
      name: "feather",
      url: "http://github.com/feathericons/feather",
      slug: "icons from",
    },
    {
      name: "hosting.de",
      url: "https://hosting.de/?partnerId=O2tr9S2l2JBYwWpmAFXH",
      slug: "hosted at",
    },
  ];
</script>

<div class="flex flex-wrap justify-center pb-4">
  {#each tools as { name, slug, url }, i}
    <a
      class="flex items-center mx-4 my-2"
      href={url}
      on:mouseenter={() => (tools[i].hover = true)}
      on:mouseleave={() => (tools[i].hover = false)}
      rel="noopener noreferrer"
      style="filter: grayscale({tools[i].hover ? 0 : 90}%)"
      target="_blank"
      title={slug + " " + name}
    >
      <img
        alt={name}
        class="object-contain object-center lazyload"
        data-src="assets/tools/{name}.svg"
      />
    </a>
  {/each}
</div>
