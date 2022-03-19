<script setup>
import { onMounted } from "vue";
onMounted(() => {
  setTimeout(() => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#content").style.visibility = "visible";
    document.querySelector("body").style.visibility = "visible";
  }, 2000);
});
</script>

<template>
  <div>
    <link href="http://fonts.cdnfonts.com/css/greatfull" rel="stylesheet" />
    <div id="loader">
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>

      <img
        class="center"
        src="https://giffiles.alphacoders.com/121/12161.gif"
        width="600px"
      />
    </div>
    <div id="content">
      <NuxtLayout name="navbar" />
      <div
        class="hero min-h-screen"
        style="background-image: url(https://pic.re/image)"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold" id="opacityAnimation">
              おはようございます
            </h1>
            <p class="mb-5">
              Willkommen zu unseren neuen Plattform für Animes!<br />
              Du findest hier alles zu neue Folgen, Anime-Serien oder Mangas.
            </p>

            <NuxtLink to="/login">
              <button class="btn btn-primary">Los Geht's</button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <NuxtLayout name="footer" />
    </div>
  </div>
</template>


 <style scoped lang="scss">
@import "@/assets/scss/main.scss";
</style>
