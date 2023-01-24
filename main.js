import { initCallbackServices } from "./async-services/callback.js";
import { initPromiseServices } from "./async-services/promise.js";
import { initAsyncServices } from "./async-services/async.js";

document
  .querySelector("#run-callback")
  .addEventListener("click", initCallbackServices);
document
  .querySelector("#run-promise")
  .addEventListener("click", initPromiseServices);
document
  .querySelector("#run-async")
  .addEventListener("click", initAsyncServices);
