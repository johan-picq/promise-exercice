import { services, init, getStatusService, nextServicetoRun } from "./init.js";

export const initCallbackServices = () => {
  const startService = (service, callback) => {
    getStatusService(service.id, "start");
    setTimeout(() => {
      getStatusService(service.id, "end");
      callback(service.id);
    }, service.duration);
  };

  const startServiceCallback = (serviceId) => {
    if (nextServicetoRun(serviceId)) {
      startService(nextServicetoRun(serviceId), startServiceCallback);
    }
  };

  init();
  services.forEach((service) => {
    if (!service.dependancies.length) {
      startService(service, startServiceCallback);
    }
  });
};
