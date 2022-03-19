<script setup>
import { ref, onMounted } from "vue";

// reactive state
// const count = ref(0)

// functions that mutate state and trigger updates
// function increment() {
//   count.value++
// }
// lifecycle hooks
onMounted(() => {
  setTimeout(() => {
    document.querySelector("#loader").style.display = "none";

    document.querySelector("#content").style.visibility = "visible";
    document.querySelector("body").style.visibility = "visible";

    console.log(`The initial count is lol.`);
  }, 4000);
});
</script>

<template>
  <div>
    <img  id="loader" class="center" src="https://i.gifer.com/F62s.gif">

    <div id="content">
      <NuxtLayout name="navbar">
        <div
          class="hero min-h-screen"
          style="background-image: url(https://pic.re/image)">
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">おはようございます</h1>
              <p class="mb-5">
                Willkommen zu unseren neuen Plattform für Animes!<br />
                Du findest hier alles zu neue Folgen, Anime-Serien oder Mangas.
              </p>
              <button class="btn btn-primary">
                <NuxtLink to="/login" :prefetch="false">Los Geht's</NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </NuxtLayout>
    </div>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<style lang="scss">
#content,
body {
  visibility: hidden;
}
html {
  background:rgb(22 22 22) !important;
}
// #loader {
//   border: 12px solid #f3f3f3;
//   border-radius: 50%;
//   border-top: 12px solid #444444;
//   width: 70px;
//   height: 70px;
//   animation: spin 1s linear infinite;
//   visibility: visible;
// }

#loader{
  visibility: visible;
}

// @keyframes spin {
//   100% {
//     transform: rotate(360deg);
//   }
// }

.center {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
