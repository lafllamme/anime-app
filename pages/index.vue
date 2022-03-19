<template>
  <div>
    <NuxtLayout name="navbar">
      <div
        class="hero min-h-screen"
        style="background-image: url(https://pic.re/image)"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">おはようございます</h1>
            <p class="mb-5">
              Willkommen zu unseren neuen Plattform für Animes!<br />
              Du findest hier alles zu neue Folgen, Anime-Serien oder Mangas.
            </p>
            <button class="btn btn-primary">
              <NuxtLink to="/login" :prefetch="true">Los Geht's</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </NuxtLayout>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<style lang="scss">
</style>
