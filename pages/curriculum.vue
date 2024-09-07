<template>
  <div class="curriculum-wrapper">
    <home :links="links" />
  </div>
</template>

<script>
export default {
  name: "curriculum-page",
  data: function() {
    return {
      links: [
        {
          id: 1,
          ref: "https://danielsanrocha.com/curriculum/cv.pdf",
          title: "Versão em Português",
          description: "",
          thumbnail_src: "/thumbnails/curriculum.png",
          openInNewTab: true
        }
      ]
    };
  }
};
</script>

<style @scoped>
.curriculum-wrapper {
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
</style>
