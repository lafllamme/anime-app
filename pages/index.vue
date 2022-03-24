<script setup>
import { onMounted } from "vue";
onMounted(() => {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  // document.querySelector("#body").style.width = width;

  console.log(width);
  setTimeout(() => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#content").style.visibility = "visible";
  }, 2000);
});
</script>

<template>
  <div id="body">
    <!-- Fixes Samsung Device Width -->
    <meta
      name="viewport"
      content="user-scalable=no, width=device-width, initial-scale=1.0"
    />
    <!-- Loading Screen -->
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
        src="@/assets/images/loading.gif"
        id="loadingAnimation"
      />
    </div>

    <!-- Main Content -->
    <div id="content">
      <NuxtLayout name="navbar-login" />
      <div
        id="background"
        class="hero min-h-screen min-w-full place-content-center"
      >
        <!-- <div class="hero-overlay bg-opacity-60"></div> -->
        <div
          class="hero-content text-center text-neutral-content relative -top-40"
        >
          <div class="max-w-prose">
            <h1 id="welcomeTitle" class="mb-5 text-4xl font-extrabold">
              おはようございます
            </h1>

            <h1 id="welcomeBanner">
              <p class="mr-40">NEUE</p>
              <div class="message ml-4 ">
                <div class="word1">Animes</div>
                <div class="word2">Mangas</div>
                <div class="word3">Infos</div>
              </div>
            </h1>
            <p class="mb-5 mt-6 px-16">
              Willkommen zu unseren neuen Plattform für Animes!<br />
              Du findest hier alles zu neue Folgen, Anime-Serien oder Mangas.
            </p>

            <!-- <NuxtLink to="/login">
              <button class="btn btn-primary">Los Geht's</button>
            </NuxtLink> -->
          </div>
        </div>
      </div>

      <NuxtLayout name="footer" />
    </div>
  </div>
</template>


 <style scoped lang="scss">
@import "@/assets/scss/main.scss";
@import url("https://fonts.googleapis.com/css?family=Pacifico");

@import url("https://fonts.googleapis.com/css?family=Permanent+Marker");

@import url("https://fonts.googleapis.com/css?family=Abril\+Fatface");

#welcomeTitle {
  font-family: source sans pro;
  // font-size: 3rem;
  // font-weight: 700;
  // line-height: 1.5;
  white-space: nowrap;
  animation: visible 4s ease infinite;
}

#welcomeBanner {
  color: #fff;
  font-family: source sans pro;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  width: 500px;
}

@-webkit-keyframes openclose {
  0% {
    top: 0.2rem;
    width: 0;
  }

  5% {
    width: 0;
  }

  15% {
    width: 230px;
  }

  30% {
    top: 0.2rem;
    width: 230px;
  }

  33% {
    top: 0.2rem;
    width: 0;
  }

  38% {
    top: -4.5rem;
    width: 0;
  }

  48% {
    width: 190px;
  }

  62% {
    top: -4.5rem;
    width: 190px;
  }

  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }

  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }

  86% {
    width: 285px;
  }

  98% {
    top: -9rem;
    width: 285px;
  }

  99% {
    text-indent: 5px;
    top: -9rem;
    width: 0;
  }

  100% {
    text-indent: 0;
    top: 0;
    width: 0;
  }
}

@keyframes openclose {
  0% {
    top: 0.2rem;
    width: 0;
  }

  5% {
    width: 0;
  }

  15% {
    width: 230px;
  }

  30% {
    top: 0.2rem;
    width: 230px;
  }

  33% {
    top: 0.2rem;
    width: 0;
  }

  38% {
    top: -4.5rem;
    width: 0;
  }

  48% {
    width: 190px;
  }

  62% {
    top: -4.5rem;
    width: 190px;
  }

  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }

  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }

  86% {
    width: 285px;
  }

  98% {
    top: -9rem;
    width: 285px;
  }

  99% {
    text-indent: 5px;
    top: -9rem;
    width: 0;
  }

  100% {
    text-indent: 0;
    top: 0;
    width: 0;
  }
}

.message {
  background-color: rgb(81, 42, 224);
  color: #fff;
  font-weight: 900;
  overflow: hidden;
  position: absolute;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 220px;
  -webkit-animation: openclose 5s ease-in-out infinite;
  animation: openclose 5s ease-in-out infinite;
}

.word1 {
  font-family: Abril Fatface;
  padding: auto;
}

.word2 {
  font-family: source code pro;
  padding: auto;
}

.word3 {
  font-family: Permanent Marker;
  padding: auto;
}

#background {
  background: url("@/assets/images/background.webp"),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: overlay;
}

@font-face {
  font-family: "Greatfull";
  font-style: normal;
  font-weight: 400;
  src: local("Greatfull"),
    url("https://fonts.cdnfonts.com/s/77739/greatfull.woff") format("woff");
}
</style>

