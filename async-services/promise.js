import { services, getStatusService, initTimer } from "./init.js";

export const initPromiseServices = () => {
  const startServiceWithPromise = (service) => {
    return new Promise((resolve) => {
      let nextServiceToWork = null;
      services.forEach((s) => {
        if (s.dependancies === service.id) {
          nextServiceToWork = s;
        }
      });
      getStatusService(service.id, "start");
      setTimeout(() => {
        getStatusService(service.id, "end");
        resolve(nextServiceToWork);
      }, service.duration);
    });
  };

  initTimer();
  services.forEach((service) => {
    if (service.dependancies === null) {
      startServiceWithPromise(service).then((nextServiceToWork) => {
        if (nextServiceToWork) {
          startServiceWithPromise(nextServiceToWork).then(
            (nextServiceToWork) => {
              if (nextServiceToWork) {
                startServiceWithPromise(nextServiceToWork);
              }
            }
          );
        }
      });
    }
  });
};
