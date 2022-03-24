<script setup lang="ts">
//   console.log("doene");

import { ref, onMounted } from "vue";
const searchText = ref("");
const myData = ref([]) as any;
const searchSize = ref(10);
var intervalChecker = ref(true);

onMounted(() => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    console.log("Its a Phone!");
    let searchGrid = document.getElementById("searchGrid");
    searchGrid.classList.remove("grid-cols-3");
    searchGrid.classList.add("grid-cols-1");
  }
});

async function searchForAnimes() {
  console.log("BEFORE:", intervalChecker.value);
  if (intervalChecker.value === true) {
    const data = await fetch(`/api/index?search=${searchText.value}`);
    const json = await data.json();
    myData.value = json.results;
    intervalChecker.value = false;
    console.log(searchText.value);
    console.log(json.results);
    console.log("AFTER:", intervalChecker.value);
    setTimeout(() => {
      intervalChecker.value = true;
    }, 7000);
  } else {
    alert("Bitte warte kurz einen Moment...");
  }
}
</script>
  <template>
  <div>
    <meta
      name="viewport"
      content="user-scalable=no, width=device-width, initial-scale=1.0"
    />
    <div class="bg"></div>

    <!-- <div class="content">
     
    </div> -->
    <NuxtLayout name="navbar"></NuxtLayout>
    <div class="grid place-items-center h-screen">
      <form
        id="form"
        class="input-group flex justify-center mt-2 mb-2"
        @submit.prevent="searchForAnimes"
      >
        <input
          type="text"
          id="searchInput"
          v-model="searchText"
          placeholder="Tipp einen Namen..."
          class="input input-bordered input-primary w-full max-w-lg"
        />
        <br />

        <button id="formBtn" class="btn btn-primary btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">Ich suche...</p>

          <ul class="content__container__list ml-12">
            <li class="content__container__list__item ">Boruto</li>
            <li class="content__container__list__item">Bleach</li>
            <li class="content__container__list__item">AOT</li>
          </ul>
        </div>
      </div>
      <!-- <label class="label cursor-pointer">
        <span class="label-text">Red pill</span>

        <input
          type="radio"
          name="radio-2"
          class="radio radio-primary"
          checked
        />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Red pill</span>

        <input type="radio" name="radio-2" class="radio radio-primary" />
      </label> -->

      <div>
        <label for="my-modal-6" class="btn modal-button m-5">Hilfe!</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-center mb-6">
              Wie die Suche funktioniert?
            </h3>
            <p class="py-4 px-4 text-center">
              Du musst nur den Namen der Serie eintippen! Außerdem kannst du
              auch nach Kategorien filtern
            </p>
            <div class="modal-action">
              <label for="my-modal-6" class="btn">Okay!</label>
            </div>
          </div>
        </div>
      </div>
      <!-- Loaded Results Start -->
      <div id="searchGrid" class="grid grid-cols-3 gap-7 m-4">
        <div
          id="renderAnimeDiv"
          v-for="anime in myData"
          :key="anime.mal_id"
          class="ml-4 mr-4"
        >
          <div class="indicator">
            <span
              id="notification"
              class="indicator-item badge badge-accent top-4 p-5 mr-5"
              >{{ anime?.type }}</span
            >

            <div
              id="animeCard"
              class="card lg:card-side bg-base-100 shadow-xl m-4"
            >
              <img
                id="animeCover"
                class="object-cover"
                :src="anime?.image_url"
                alt="cover"
              />
              <div class="card-body">
                <h2 class="card-title">{{ anime?.title }}</h2>
                <p>{{ anime?.synopsis.substring(0, 255) + ".." }}</p>
                <div class="flex justify-center m-5">
                  <div class="rating rating-sm">
                    <input
                      type="radio"
                      :name="anime?.mal_id"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      :name="anime?.mal_id"
                      class="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      :name="anime?.mal_id"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      :name="anime?.mal_id"
                      class="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      :name="anime?.mal_id"
                      class="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2 mb-4">
                  <div
                    v-if="anime?.airing"
                    class="
                      badge badge-primary
                      hover:bg-primary-focus
                      px-2
                      py-4
                      mr-6
                    "
                  >
                    Läuft noch
                  </div>
                  <div
                    v-else
                    class="
                      badge badge-secondary
                      hover:bg-secondary-focus
                      px-2
                      py-4
                      mr-6
                    "
                  >
                    Abgeschlossen
                  </div>
                  <span
                    class="
                      badge
                      bg-info
                      badge-md
                      hover:bg-info-content
                      px-2
                      py-4
                      ml-6
                    "
                  >
                    {{
                      new Date(anime?.start_date).toLocaleDateString("de-DE")
                    }}</span
                  >
                </div>

                <button v-if="anime?.type != 'Movie'" class="btn gap-2">
                  EPISODEN:
                  <div class="badge">{{ anime?.episodes }}</div>
                </button>
                <button class="btn btn-primary">
                  <a :href="anime?.url">Info</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div id="animeCard" class="card card-side bg-base-100 shadow-xl m-4">
            <figure>
              <img :src="anime?.image_url" alt="anime_cover" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{ anime?.title }}</h2>
              <p>{{ anime?.synopsis }}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
              </div>
            </div>
          </div> -->
      <!-- Loaded Results End -->
    </div>
  </div>
</template>


<style scoped lang="scss">
#animeCard:hover {
  transform: scale(1.1);
  transition: 0.7s ease-out;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  box-shadow: 0 0 2rem #b721ff;
}

#renderAnimeDiv:hover #notification {
  visibility: hidden;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  font-family: "Lato", sans-serif;
  font-size: 35px;
  line-height: 40px;
  color: #ecf0f1;

  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 40px;

    &:before {
      content: "[";
      left: 0;
    }

    &:after {
      content: "]";
      position: absolute;
      right: 0;
    }

    &:after,
    &:before {
      position: absolute;
      top: 0;

      color: #16a085;
      font-size: 42px;
      line-height: 32px;

      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
      margin: 0;
    }

    &__list {
      margin-top: 0;
      margin-left: 190px;
      word-spacing: 30px;

      text-align: left;
      list-style: none;

      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height: 40px;
        margin: 0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-webkit-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@-o-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-o-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@-moz-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-moz-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

.bg {
  // background-position: center center; /* Background image doesn’t tile */
  // background-repeat: no-repeat; /* Background image is fixed in the viewport so that it doesn’t move when the content’s height is greater than the image’s height */
  // background-attachment: fixed; /* This is what makes the background image rescale based on the container’s size */
  // background: url("https://i.pinimg.com/originals/f3/5a/7d/f35a7da260149aedb34c64a3ff4a41b8.gif");

  opacity: 0.8;
  height: 100vh;
  left: -50%;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
  background: linear-gradient(-45deg, #2b0635, #68072e, #042d3b, #00523f);
  background-size: 400% 400%;
  animation: gradient 15s ease-in-out infinite;
  height: 100vh;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

<script lang="ts">
function removeMessage(id) {
  var el = document.getElementById(id);
  if (el.style.display === "none") {
    el.style.visibility = "visible";
    el.classList.add("modal-open");
  } else {
    el.style.visibility = "hidden";
    el.classList.remove("modal-open");
  }
}
</script>

