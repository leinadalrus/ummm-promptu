<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div
    class="pt-4 mx-auto hue-rotate-20 bg-zinc-800 bg-gradient-to-r from-zinc-500 via-gray-500 to-rose-400 shadow-md overflow-hidden"
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
              class="font-medium px-3 py-2 rounded-tl-lg text-slate-700 hover:bg-rose-400 hover:text-gray-200"
              to="/"
              >Briochure</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-rose-400 hover:text-gray-200"
              to="/player"
              >Watch</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-rose-400 hover:text-gray-200"
              to="/caption"
              >Caption</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 text-slate-700 hover:bg-rose-400 hover:text-gray-200"
              to="/library"
              >Library</RouterLink
            >
            <RouterLink
              class="font-medium px-3 py-2 rounded-br-lg text-slate-700 hover:bg-rose-400 hover:text-gray-200"
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