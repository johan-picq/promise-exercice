import { services, getStatusService, timeout, initTimer } from "./init.js";
export const initAsyncServices = () => {
  const startServiceWithAsync = async (service, duration) => {
    let nextServiceToWork = null;
    services.forEach((s) => {
      if (s.dependancies === service) {
        nextServiceToWork = s;
      }
    });
    getStatusService(service, "start");
    await timeout(duration);
    getStatusService(service, "end");
    if (nextServiceToWork) {
      startServiceWithAsync(nextServiceToWork.id, nextServiceToWork.duration);
    }
  };

  initTimer();
  services.forEach((service) => {
    if (service.dependancies === null) {
      startServiceWithAsync(service.id, service.duration);
    }
  });
};
