import { services, getStatusService, initTimer } from "./init.js";

export const initAsyncServices = () => {
  const startServiceWithAsync = (service, duration) => {
    return new Promise((resolve) => {
      let nextServiceToWork = null;
      services.forEach((s) => {
        if (s.dependancies === service) {
          nextServiceToWork = s;
        }
      });
      getStatusService(service, "start");
      setTimeout(() => {
        getStatusService(service, "end");
        resolve(nextServiceToWork);
      }, duration);
    });
  };
  initTimer();
  services.forEach((service) => {
    if (service.dependancies === null) {
      startServiceWithAsync(service.id, service.duration).then(
        (nextServiceToWork) => {
          if (nextServiceToWork) {
            startServiceWithAsync(
              nextServiceToWork.id,
              nextServiceToWork.duration
            );
          }
        }
      );
    }
  });
};
