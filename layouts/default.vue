<template>
  <div id="app">
    <navtop id="navtop" />
    <div class="wrapper">
      <NuxtPage id="content" />
    </div>
    <footer class="footer" id="footer">
      <div class="content has-text-centered is-vcentered name">
        <strong>Daniel Santana Rocha</strong>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style @scoped>
.wrapper {
  margin-bottom: 3.14em;
}

.footer {
  margin-top: auto;
  width: 100%;
  background-color: black;
  height: 3.14em;
  padding: 0;
  padding-top: 0.7em;
  margin: 0;
}

.wrapper, #app {
  min-height: 100vh;
}
</style>
