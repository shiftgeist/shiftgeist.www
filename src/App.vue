<template>
  <div id="app">
    <!--
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *::selection {
    background-color: #E53935;
    color: #fff;
  }
}

h1, h2, h3, h4, h5, h6, p {
  font-weight: 400;
}

a {
  color: #ffffff;
  text-decoration-color: mix(#212121, #ffffff, 70%);
  transition: text-decoration .2s ease-in-out;

  &:hover {
    text-decoration-color: #ffffff;
  }
}

#app {
  font-family: 'Titillium Web', sans-serif;

  .bg-light {
    background-color: #f3f3f3;
  }

  .bg-dark {
    background-color: #212121;
  }
}
</style>
