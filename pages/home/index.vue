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
          placeholder="Naruto..."
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
      <div id="searchGrid" class="grid grid-cols-3 gap-8 m-4">
        <div v-for="anime in myData" :key="anime.mal_id" class="ml-4 mr-4">
          <div id="animeCard" class="card lg:card-side bg-base-100 shadow-xl">
              <img class="object-cover " :src="anime?.image_url" alt="cover" />
            <div class="card-body">
              <h2 class="card-title">{{ anime?.title }}</h2>
              <p>{{ anime?.synopsis.substring(0,255)+".." }}</p>

              <div class="badge badge-outline hover:bg-pink-400">Fashion</div>
              <div class="badge badge-outline hover:bg-pink-400">Products</div>
              <div class="card-actions justify-end">
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
}
.bg {
  // background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  // animation: gradient 15s ease-in-out infinite;
  // background-size: 400% 400%;
  // height: 100vh;
  // left: -50%;
  // position: fixed;
  // right: -50%;
  // top: 0;
  // z-index: -1;
  // opacity: 0.6;
  /* Location of the image */
  background-position: center center; /* Background image doesn’t tile */
  background-repeat: no-repeat; /* Background image is fixed in the viewport so that it doesn’t move when the content’s height is greater than the image’s height */
  background-attachment: fixed; /* This is what makes the background image rescale based on the container’s size */
  background: url("https://i.pinimg.com/originals/f3/5a/7d/f35a7da260149aedb34c64a3ff4a41b8.gif");
  // animation: gradient 15s ease-in-out infinite;
  // background-size: 400% 400%;
  background-size: cover;
  opacity: 0.5;
  height: 100vh;
  left: -50%;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

.content {
  left: 50%;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
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

