import { defineStore } from "pinia"
import { ref, computed } from 'vue'
import { appWindow } from '@tauri-apps/api/window';



const useWindowStore = defineStore('window', () => {
    const windowHeight = ref()
    const getWindowHeight = computed(() => windowHeight.value)
    async function setWindowHeight() {
        const appSize = await appWindow.innerSize()
        windowHeight.value = appSize.height
    }

    //is the window maximized
    const windowMaximized = ref<boolean>()
    const getWindowMaxmized = computed(() => windowMaximized.value)
    function setWindowMaximized(value: boolean) {
        windowMaximized.value = value
    }
    return { windowHeight, getWindowHeight, setWindowHeight, windowMaximized, getWindowMaxmized, setWindowMaximized }
})

export { useWindowStore }