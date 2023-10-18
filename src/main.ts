import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import router from "./router/router"
import { useWindowStore } from "./store/windowStore"
import { appWindow } from '@tauri-apps/api/window';
import { createPinia } from "pinia"

//prevents the following actions
/**
 * open search bar with strg+f
 * prevent page refresh with F5
 * opening with right mouse click
 */
// window.addEventListener('keydown', function (e) {
//     if ((e.ctrlKey && e.code == "KeyF") || e.code =="F5") { 
//           e.preventDefault();
//     }
// })

window.addEventListener('mousedown', function(e) {
    if(e.button == 2) {
        console.log("right mouse button clicked")
        e.preventDefault()
    }
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router)

const windowStore = useWindowStore()

//setup window store to watch for changes to the window
async function watchWindowResize() {
    await appWindow.onResized(async () => {
        windowStore.setWindowHeight()
        const isMaximized = await appWindow.isMaximized()
        if(isMaximized) {
            windowStore.setWindowMaximized(true)
        }
        else {
            windowStore.setWindowMaximized(false)
        }
    });
}
watchWindowResize()

app.mount("#app");
