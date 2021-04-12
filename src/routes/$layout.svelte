<script>
  import '../app.css';
  import '../services/i18n';

  import Navigation from '$lib/Navigation.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Navigation />

<slot />

<Footer />
