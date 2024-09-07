<template>
  <div class="videos-wrapper">
    <h2 class="description">My Videos =)</h2>
    <home :links="links" />
  </div>
</template>

<script>
export default {
  name: "videos-page",
  data: function () {
    return {
      links: [
      ],
    };
  },
};
</script>

<style @scoped>
.videos-wrapper {
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: auto;
}

h2.description {
  color: gray;
  text-align: center;
  font-size: 2.3em;
}

@media (max-width: 620px) {
  h2.description {
    font-size: 1.5em;
  }
}
</style>
