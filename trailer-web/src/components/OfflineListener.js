import { Notify } from "quasar"

export default {
  data() {
    return {
      offlineListener: null,
      onlineListener: null,
      online: navigator.onLine,
      refreshPrompt: null,
      offlineNotification: null,
      tickTockKey: 0,
      refreshing: false,
    }
  },
  created() {
    this.onlineListener = window.addEventListener("online", () => {
      this.online = true
    })

    this.offlineListener = window.addEventListener("offline", () => {
      this.online = false
    })

    this.updateListener = document.addEventListener(
      "swUpdated",
      this.showUpdateNotification,
      { once: true }
    )

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return
      this.refreshing = true
      window.location.reload()
    })
  },
  beforeDestroy() {
    this.onlineListener = null
    this.offlineListener = null
  },
  methods: {
    showOfflineNotification() {
      if (this.refreshPrompt) {
        this.refreshPrompt()
        this.refreshPrompt = null
      }
      this.offlineNotification = Notify.create({
        message: "Offline",
        // TODO: change this, implement bg-opposite, text-opposite classes or w/e.
        color: "black",
        timeout: 0,
      })
    },
    showPromptToRefresh() {
      if (this.offlineNotification) {
        this.offlineNotification()
        this.offlineNotification = null
      }
      this.refreshPrompt = Notify.create({
        message: "Connected",
        actions: [
          {
            icon: "refresh",
            color: "white",
            handler: this.handleRefresh,
          },
        ],
        // TODO: change this to something nicer.
        color: "positive",
        timeout: 0,
      })
    },
    showUpdateNotification(event) {
      const registration = event.detail
      Notify.create({
        message: "App updated! Click here to apply update.",
        actions: [
          {
            icon: "refresh",
            color: "white",
            handler: () => this.handleActivateUpdate(registration),
          },
        ],
        color: "black",
        timeout: 0,
      })
    },
    handleActivateUpdate(registration) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" })
    },
    handleRefresh() {
      // swaps between 1 and 0, don't need anything more.
      this.tickTockKey = +!this.tickTockKey

      if (this.refreshPrompt) {
        this.refreshPrompt()
        this.refreshPrompt = null
      }
    },
  },
  watch: {
    online: {
      handler(newVal, oldVal) {
        if (newVal === false) {
          this.showOfflineNotification()
        } else if (newVal === true && oldVal === false) {
          this.showPromptToRefresh()
        } else {
        }
      },
    },
  },
  render() {
    return this.$scopedSlots.default({
      // Eh, probably don't need but why not.
      online: this.online,
      presenceKey: this.tickTockKey,
    })
  },
}
