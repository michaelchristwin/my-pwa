import { ref, onMounted, onUnmounted } from "vue";

export function usePWAInstall() {
  const deferredPrompt = ref<any>(null);
  const canInstall = ref(false);

  function handler(e: Event) {
    e.preventDefault();
    deferredPrompt.value = e;
    canInstall.value = true;
  }

  onMounted(() => {
    window.addEventListener("beforeinstallprompt", handler);
  });

  onUnmounted(() => {
    window.removeEventListener("beforeinstallprompt", handler);
  });

  async function install() {
    if (!deferredPrompt.value) return;

    deferredPrompt.value.prompt();
    await deferredPrompt.value.userChoice;

    deferredPrompt.value = null;
    canInstall.value = false;
  }

  return {
    canInstall,
    install,
  };
}
