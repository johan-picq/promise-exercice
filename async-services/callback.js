import { services, getStatusService, initTimer } from "./init.js";
// A REVOIR DEPENDENCIES
export const initCallbackServices = () => {
  const startServiceWithCallback = (service, callback) => {
    let nextServiceToWork = null;
    services.forEach((s) => {
      if (s.dependancies.includes(service.id)) {
        nextServiceToWork = s;
      }
    });
    getStatusService(service.id, "start");
    setTimeout(() => {
      getStatusService(service.id, "end");
      callback(nextServiceToWork);
    }, service.duration);
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
      return startServiceWithCallback(service, startServiceCallback);
    }
  });
};
