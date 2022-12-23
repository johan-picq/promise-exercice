import { initCallbackServices } from "./async-services/callback.js";

const callbackBtn = document.querySelector("#run-callback");

callbackBtn.addEventListener("click", initCallbackServices);
