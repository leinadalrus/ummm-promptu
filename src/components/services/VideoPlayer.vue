<script lang="ts">
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default defineComponent({
  components: {
    VideoPlayer
  }
})
</script>

<!-- have database connection value of API URL here -->
<template>
  <main class="p-8">
    <article
      class="py-16 px-4 max-w-sm mx-auto bg-zinc-800 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
    >
      <ul role="list" class="p-6 divide-y divide-slate-200">
        <!-- Remove top/bottom padding when first/last child -->
        <li class="flex py-4 first:pt-0 last:pb-0">
          <img class="h-10 w-10 rounded-full" src="@/assets/logo.svg" alt="" />
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">
              {{ 'person.name' }}
            </p>
            <p class="text-sm text-slate-500 truncate">{{ 'person.email' }}</p>
          </div>
        </li>
      </ul>
    </article>
    <article
      class="py-16 px-4 max-w-sm mx-auto bg-zinc-800 rounded-bl-lg shadow-b-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
    >
      <video-player
        :children="[]"
        src=""
        post=""
        controls
        :loop="false"
        :volume="0.5"
      >
        <template v-slot="{ player, state }">
          <div class="custom-player-controls">
            <button @click="state.playing ? player.pause() : player.play()">
              {{ state.playing ? 'Pause' : 'Play' }}
            </button>
            <button @click="player.muted(!state.muted)">
              {{ state.muted ? 'UnMute' : 'Mute' }}
            </button>
          </div>
        </template>
      </video-player>
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-white font-bold">{{ 'Name' }}</p>
          <p class="text-rose-300 font-medium">{{ 'By Captioner' }}</p>
        </div>
      </div>
    </article>
    <article class="p-32">
      <div
        class="py-16 px-4 max-w-sm mx-auto bg-zinc-800 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
      >
        <table class="md:table-auto">
          <thead>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
          </thead>
          <!-- ... -->
          <tbody>
            <tr>
              <td>{{ 'person.name' }}</td>
              <td>{{ 'person.title' }}</td>
              <td>{{ 'person.email' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </main>
</template>
