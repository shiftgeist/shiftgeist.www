<script>
  const tools = [
    {
      name: "svelte",
      url: "http://github.com/sveltejs/svelte",
      slug: "made with",
    },
    {
      name: "tailwindcss",
      url: "http://github.com/tailwindcss/tailwindcss",
      slug: "made with",
    },
    {
      name: "feather",
      url: "http://github.com/feathericons/feather",
      slug: "made with",
    },
    {
      name: "ticktick",
      url: "https://ticktick.com/zFVY6?u=107dac9d5385480a8e238d6a51e1f0c2",
      slug: "planed with",
    },
    {
      name: "hosting.de",
      url: "https://hosting.de/?partnerId=O2tr9S2l2JBYwWpmAFXH",
      slug: "hosted by",
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
      title={slug + ' ' + name}>
      <img
        src="assets/tools/{name}.svg"
        alt={name}
        class="object-contain object-center" />
    </a>
  {/each}
</div>
