import { initCallbackServices } from "./async-services/callback.js";
import { initPromiseServices } from "./async-services/promise.js";
import { initAsyncServices } from "./async-services/async.js";

const callbackBtn = document.querySelector("#run-callback");
const promiseBtn = document.querySelector("#run-promise");
const asyncBtn = document.querySelector("#run-async");

callbackBtn.addEventListener("click", initCallbackServices);
promiseBtn.addEventListener("click", initPromiseServices);
asyncBtn.addEventListener("click", initAsyncServices);
