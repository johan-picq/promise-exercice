import { services, getStatusService, initTimer } from "./init.js";

export const initCallbackServices = () => {
  const startServiceWithCallback = (service, duration, callback) => {
    let nextServiceToWork = null;
    services.forEach((s) => {
      if (s.dependancies === service) {
        nextServiceToWork = s;
      }
    });
    getStatusService(service, "start");
    setTimeout(() => {
      getStatusService(service, "end");
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

  initTimer();
  services.forEach((service) => {
    if (service.dependancies === null) {
      return startServiceWithCallback(
        service.id,
        service.duration,
        startServiceCallback
      );
    }
  });
};
