<script>
  import { projects } from "../stores";
  import { onMount } from "svelte";

  onMount(async () => {
    const res = await fetch(createApiUrl("project"));

    if (res.ok) {
      const body = await res.json();
      projects.set(body.results);
    }
  });

  function createApiUrl(type) {
    return `__apiBase__/documents/search?ref=XsAlExAAALxw0HV5&q=[[at(document.type,"${type}")]]&format=json`;
  }
</script>

{#each $projects as { data }}
  <div class="my-40 font-light text-center lg:my-48">
    <div class="py-16">
      <h2 class="text-2xl">{data.title[0].text}</h2>
      <p class="font-serif text-6xl font-bold">{data.description[0].text}</p>
    </div>

    <img src={data.image.url} alt={data.image.alt} />
  </div>
{/each}
