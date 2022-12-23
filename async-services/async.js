import { services, getTimer, initTimer } from "./init.js";

export const initAsyncServices = () => {
  initTimer();
  console.log("async");
};
