<script lang="ts">
  import { onMount } from 'svelte';
  import { changeFaviconColor } from '../services/favicon';
  import { dev } from '$app/env';

  // import firebase from 'firebase/app';
  // import 'firebase/firestore';
  // import 'firebase/auth';

  import '../app.css';
  import '../services/i18n';

  import Navigation from '$lib/Navigation.svelte';
  import Footer from '$lib/Footer.svelte';

  $: darkTheme = false;
  $: if (darkTheme) {
    changeFaviconColor();
  }

  let appName;

  onMount(() => {
    // useEmulator();
    setupDarkTheme();
  });

  // function useEmulator() {
  //   // const firebase = e.detail.firebase;
  //   if (dev) {
  //     const db = firebase.firestore();
  //     db.settings({ host: 'localhost:8080', ssl: false });
  //     appName = firebase.app().name;
  //     db.doc('posts/slow-post').delete();
  //     db.doc('posts/event-post').set({ title: 'Event Post' });
  //     db.doc('posts/once').set({ title: 'Once-Doc' });
  //     setTimeout(() => {
  //       db.doc('posts/slow').set({ title: 'Slowness' });
  //     }, 5000);
  //   }
  // }

  function setupDarkTheme() {
    darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
      darkTheme = matches;
    });
  }
</script>

<Navigation />

<slot />

<Footer />
