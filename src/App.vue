<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div
    class="mx-auto bg-zinc-900 shadow-md overflow-hidden"
  >
    <div class="md:flex">
      <div class="md:shrink-0 inline-block h-12 w-12 rounded-full ring-2 ring-white">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
      </div>
      <div class="p-8">
        <nav>
          <div class="mt-2 text-slate-500">
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/"
              >Briochure</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/player"
              >Watch</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/caption"
              >Caption</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/library"
              >Library</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/about"
              >About</RouterLink
            >
          </div>
        </nav>
      </div>
    </div>
  </div>
  <header></header>

  <RouterView />
</template>
