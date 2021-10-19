import { createApp } from "vue"
import Oruga from "@oruga-ui/oruga-next"
import "@oruga-ui/oruga-next/dist/oruga.css"

import App from "./App.vue"

createApp(App).mount("#app").use(Oruga)
