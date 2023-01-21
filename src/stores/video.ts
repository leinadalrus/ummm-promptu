import { defineStore, mapWritableState } from 'pinia'

interface VideoInfo {
  source: string
  type: string
}

interface VideoCache {
  VideoList: VideoInfo[]
  Video: VideoInfo | undefined
}

export const VideoCacheStore = defineStore('VideoId', {
  state: (): VideoCache => {
    // make sure the lambda has a return type
    return {
      // makes it easier to read
      VideoList: [] as VideoInfo[],
      Video: undefined as VideoInfo | undefined
    }
  }
})

export default {
  computed: {
    // If you want to be able to write to these state properties
    // (e.g. if you have a form)
    ...mapWritableState(VideoCacheStore, [
      /* have sql key-to-string here */
    ])
  },

  setup () {
    const mediaStore = VideoCacheStore()
    mediaStore.$subscribe(
      (mutation, state) => {
        mutation.type // 'direct' | 'patch object' | 'patch function'
        mutation.storeId // only available with mutation.type === 'patch object'

        localStorage.setItem('video', JSON.stringify(state))
      },
      { detached: true }
    )
  }
}
