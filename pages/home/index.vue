<script setup lang="ts">
//   console.log("doene");

import { ref, onMounted } from "vue";
const searchText = ref("");
const myData = ref([]) as any;
const searchSize = ref(10);
var intervalChecker = ref(true);

onMounted(() => {});

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
  <div class="bg">
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
          placeholder="Type here"
          class="input input-bordered input-primary w-full max-w-xs"
        />
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

      <div v-for="anime in myData" :key="anime.mal_id">
        <div class="card card-side bg-base-100 shadow-xl m-4">
          <figure>
            <img :src="anime?.image_url" :alt="anime_cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ anime?.title }}</h2>
            <p>{{ anime?.synopsis }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div
      tabindex="0"
      class="
        collapse collapse-plus
        border border-base-300
        bg-base-100
        rounded-box
      "
    >
      <div class="collapse-title text-xl font-medium">
        Focus me to see content
      </div>
      <div class="collapse-content">
        <p>{{ data }}</p>
      </div>
    </div>
  </div> -->
  <!-- <label
    for="my-modal"
    @click="removeMessage('modalMessage')"
    class="btn modal-button"
    >open modal</label
  > -->

  <!-- Put this part before </body> tag -->
  <!-- <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div id="modalMessage" class="modal modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg text-center">Wir benutzen Cookies! 🍪</h3>
      <p class="py-4 text-center mt-4">
        Um dir unseren Service anzubieten, darf dein Browser gewisse Daten nicht
        vergessen.
      </p>
      <div class="modal-action mt-2">
        <label
          for="my-modal"
          @click="removeMessage('modalMessage')"
          class="btn btn-primary"
          >Yay!</label
        >
      </div>
    </div>
  </div> -->
</template>


<style scoped lang="scss">
.carousel-item {
  width: 15rem !important;
}

.bg {
  background-size: 100% 100% !important;
  background: url("https://i.gifer.com/RYX2.gif");
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
