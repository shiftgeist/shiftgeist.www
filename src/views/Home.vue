<template>
  <div class="home">

    <div @click="toggleMenu" class="menu-icon bg-dark">
      <img src="../assets/menu.svg" alt="menu icon" v-show="!menuVisible">
      <img src="../assets/close.svg" alt="menu icon" v-show="menuVisible">
    </div>

    <div class="menu" v-show="menuVisible">
      <h2 class="header">menu</h2>

      <ul class="links">
        <li>01 - <a href="/">home</a></li>
        <li>02 - <a href="mailto:shiftgeist@gmail.com">contact</a></li>
        <li>03 - <a href="#" @click="toggleImprint">imprint</a></li>
      </ul>

      <ul class="imprint" v-if="imprintVisible">
        <li>Felix Hungenberg</li>
        <li>Grünewaldstr. 39b, 40764 Langenfeld, Deutschland</li>
        <li>-</li>
        <li>Mail: shiftgeist[at]gmail.com</li>
      </ul>

      <div class="socials">
        <a href="https://dribbble.com/shiftgeist" target="_blank">
          <img src="../assets/dribbble.svg" alt="Dribbble Logo" title="Dribbble Logo">
        </a>
        <a href="https://twitter.com/shiftgeist" target="_blank">
          <img src="../assets/twitter.svg" alt="Twitter Logo" title="Twitter Logo">
        </a>
        <a href="https://github.com/shiftgeist" target="_blank">
          <img src="../assets/github.svg" alt="Github Logo" title="Github Logo">
        </a>
      </div>

      <div class="crafted">
        This website is handcrafted by shiftgeist with the help of <a href="https://github.com/vuejs/vue" target="_blank">Vue.js</a>.
      </div>
    </div>

    <div class="split">
      <div class="split-child bg-light">
        <img class="logo" src="../assets/logo.svg" alt="shiftgeist logo">
      </div>
      <div class="split-child bg-dark">
        <h1>hey! i'm Felix Hungenberg, a graphic designer from germany.</h1>
      </div>
    </div>

  </div>
</template>

<script>
const confetti = require('canvas-confetti');

export default {
  name: 'home',
  data: function() {
    return {
      menuVisible: false,
      imprintVisible: false
    }
  },
  created: function() {
    window.addEventListener('keydown', this.drop)
  },
  methods: {
    drop(e) {
      if(e.code === 'KeyG' && e.shiftKey) {
        confetti.default({
          angle: 120,
          particleCount: Math.random() * (60 - 10) + 10,
          spread: 55,
          origin: {
              y: 1
          },
          colors: ['#E53935']
        });
        confetti.default({
          angle: 60,
          particleCount: Math.random() * (60 - 10) + 10,
          spread: 55,
          origin: {
              y: 1
          },
          colors: ['#ffffff']
        });
      }
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible

      if (this.menuVisible) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    toggleImprint() {
      this.imprintVisible = !this.imprintVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  color: #ffffff;
  min-height: 100vh;

  .logo {
    pointer-events: none;
  }

  .split {
    display: grid;
    align-items: center;

    @media (min-width: 1300px) {
      grid-template-columns: 1fr 1fr;
    }

    .split-child {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;

      > * {
        width: 650px;
        max-width: 90vw;
      }
    }
  }

  .menu-icon {
    position: fixed;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    padding: 30px 40px;
    user-select: none;
    cursor: pointer;
    z-index: 90;

    &:hover,
    &:focus {
      img {
        filter: drop-shadow(0px 2px 4px transparentize(#fff, .6));
      }
    }

    @media (min-width: 1300px) {
      top: 0;
      right: 0;
      bottom: auto;
      padding: 50px;
      transform: none;
    }
  }

  .menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #212121;
    font-size: 10px;
    overflow: auto;
    z-index: 80;

    @media (min-width: 1300px) {
      font-size: 16px;
    }

    .header {
      padding: 50px;
      margin: 0;
      font-size: 2.25em;
      line-height: 1;
    }

    .links {
      list-style: none;
      text-align: left;
      font-size: 2em;
      width: fit-content;
      margin: 0 auto;
      padding: 0;

      a {
        font-size: 1.5em;
      }

      li {
        text-align: left;
      }
    }

    .socials {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 70px;
      padding-bottom: 70px;

      @media (min-width: 1300px) {
        padding-bottom: 110px;
      }

      a {
        padding: 15px;

        &:hover {
          img {
            opacity: 1;
          }
        }

        img {
          opacity: .7;
          transition: opacity .2 ease-in-out;
        }
      }
    }

    .crafted {
      padding-bottom: 125px;

      @media (min-width: 1300px) {
        padding-bottom: 0;
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .imprint {
      list-style: none;
    }
  }
}
</style>
