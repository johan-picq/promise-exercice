import { services, getTimer, initTimer } from "./init.js";

export const initPromiseServices = () => {
  initTimer();
  console.log("promise");
};
