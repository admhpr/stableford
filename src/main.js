import { createApp } from "vue"
import Oruga from "@oruga-ui/oruga-next"
import "@oruga-ui/oruga-next/dist/oruga-full.css"
import App from "./App.vue"

createApp(App)
  .use(Oruga, {
    button: {
      rootClass: "btn",
      variantClass: "btn-",
      roundedClass: "btn-rounded",
      outlinedClass: "btn-outlined-",
      disabledClass: "btn-disabled",
    },
    field: {
      rootClass: "field",
      labelClass: "field-label",
      messageClass: "text-xs italic",
      variantClass: "field-",
    },
    input: {
      inputClass: "input",
      roundedClass: "rounded",
      variantClass: "input-",
      iconRightClass: "input-icon-right",
    },
    icon: {
      variantClass: "input-icon-",
    },
    checkbox: {
      checkClass: "checkbox",
      checkCheckedClass: "checkbox-checked",
      labelClass: "checkbox-label",
    },
    dropdown: {
      rootClass: "dropdown",
      menuClass: "dropdown-menu",
      itemClass: "dropdown-item",
      itemActiveClass: "dropdown-item-active",
    },
    steps: {
      itemHeaderActiveClass: "steps-nav-item-active",
      itemHeaderPreviousClass: "steps-nav-item-previous",
      stepMarkerClass: "step-marker",
      stepDividerClass: "step-divider",
    },
  })
  .mount("#app")
