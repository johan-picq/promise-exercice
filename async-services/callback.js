import { services, getTimer } from "./init.js";

const startServiceWithCallback = (service, duration, callback) => {
  let nextServiceToWork = null;
  services.forEach((s) => {
    if (s.dependancies === service) {
      nextServiceToWork = s;
    }
  });
  console.log("#", service, "started at", getTimer(), "ms");
  setTimeout(() => {
    console.log("#", service, "ended at", getTimer(), "ms");
    callback(nextServiceToWork);
  }, duration);
};

const startServiceCallback = (nextServiceToWork) => {
  if (nextServiceToWork) {
    startServiceWithCallback(
      nextServiceToWork.id,
      nextServiceToWork.duration,
      startServiceCallback
    );
  }
};

services.forEach((service) => {
  if (service.dependancies === null) {
    return startServiceWithCallback(
      service.id,
      service.duration,
      startServiceCallback
    );
  }
});
