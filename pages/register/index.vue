<template>
  <div>
    <div class="bg-base-200"><NuxtLayout name="breadcrumb" /></div>
    <div
      class="hero min-h-screen bg-base-200"
      style="background-image: url(https://pic.re/image)"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                class="input input-bordered"
              />
            </div>
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
                <a
                  href="#"
                  class="label-text-alt link link-hover hover:text-primary"
                  >mindestens 6 Zeichen</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
