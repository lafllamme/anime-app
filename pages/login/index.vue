<template>
  <div>
    <div class="bg-base-200"><NuxtLayout name="breadcrumb" /></div>

    <div
      class="hero min-h-screen bg-base-200"
      style="background-image: url(https://pic.re/image)"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left bg-base-200 opacity-90 rounded-lg">
          <h1 class="text-5xl font-bold text-center m-2">Log dich ein!</h1>
          <p class="py-6 text-center">
            Du hast bei uns alles auf einen Überblick. <br />Deine angeschauten
            Animes werden automatisch in deinem Homefeed angezeigt.
          </p>

          <div class="flex justify-center mb-4">
            <NuxtLink class="mb-4" to="/register"
              ><span
                class="
                  p-2
                  text-xs
                  font-bold
                  leading-none
                  text-white
                  bg-primary
                  rounded-full
                  hover:bg-secondary
                "
                >Noch nicht angemeldet? Dann klick hier</span
              ></NuxtLink
            >
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover"
                  >Forgot password?</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>