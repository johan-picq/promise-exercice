import { services, getStatusService, timeout, initTimer } from "./init.js";
// A REVOIR DEPENDENCIES
export const initAsyncServices = () => {
  const startServiceWithAsync = async (service) => {
    let nextServiceToWork = null;
    services.forEach((s) => {
      if (s.dependancies === service.id) {
        nextServiceToWork = s;
      }
    });
    getStatusService(service.id, "start");
    await timeout(service.duration);
    getStatusService(service.id, "end");
    if (nextServiceToWork) {
      startServiceWithAsync(nextServiceToWork);
    }
  };

  initTimer();
  services.forEach((service) => {
    if (service.dependancies === null) {
      startServiceWithAsync(service);
    }
  });
};
