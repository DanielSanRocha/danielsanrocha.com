<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img src="/logo.svg" class="logo"/>
      <a class="navbar-item link is-hidden-desktop" href="/">Home</a>

      <a role="button" @click="makeBurger" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <Icon name="ph:hamburger" mode="svg" size="4em"/>
      </a>
    </div>

    <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': navMenuActivator }">
      <div class="navbar-start">
        <a class="navbar-item link" href="/">Home</a>
        <a class="navbar-item link" href="/videos">Videos</a>
        <a class="navbar-item link is-hidden-desktop" href="https://github.com/danielsanrocha/" target="_blank">
          <Icon name="mdi:github" mode="svg" size="1em" />
          Github
        </a>
        <a class="navbar-item link is-hidden-desktop" href="https://www.linkedin.com/in/daniel-santana-rocha-48800439/" target="_blank">
          <img src="/linkedin.svg" class="logo"/>
          Linkedin
        </a>
      </div>
    </div>

    <div class="navbar-end is-hidden-touch">
      <div class="navbar-item">
        <div class="buttons links">
          <a class="navbar-item link" href="https://github.com/danielsanrocha/" target="_blank">
            <Icon name="mdi:github" mode="svg" size="1em" />
            Github
          </a>
          <a class="navbar-item link" href="https://www.linkedin.com/in/daniel-santana-rocha-48800439/" target="_blank">
            <img src="/linkedin.svg" class="logo"/>
            Linkedin
          </a>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "navtop",
  data () {
    return {navMenuActivator: false}
  },
  methods: {
    makeBurger() {
      this.navMenuActivator = !this.navMenuActivator
      return this.navMenuActivator
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: black;
}

.navbar-brand .logo {
  height: 5em;
  padding: 0.8em;
}

.navbar .title {
  color: white;
  font-size: 3.14em;
  margin-bottom: 0;
}

.navbar-end .link {
  color: #555;
  font-weight: 200;
}

.navbar-end .link:hover {
  color: blue;
}

.navbar a {
  text-decoration: none;
}

.hidden {
  display: none;
}

.navbar .link {
  color: white;
  font-weight: 200;
  font-size: 2em;
}

.navbar .link:hover {
  background-color: blue;
}

.navbar-menu.is-active {
  margin: 0;
  padding: 0;
  background-color: gray;
}

.navbar-menu.is-active .navbar-item {
  border-bottom: 1px solid white;
}

.navbar .navbar-item .link {
  font-weight: 200;
  font-size: 2em;
}

.navbar .navbar-burger {
  margin-right: 3em;
  padding: 0.3em;
}
</style>
