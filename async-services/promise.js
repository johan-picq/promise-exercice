import { services, init, getStatusService, nextServicetoRun } from "./init.js";
export const initPromiseServices = () => {
  const startService = (service) => {
    return new Promise((resolve) => {
      getStatusService(service.id, "start");
      setTimeout(() => {
        getStatusService(service.id, "end");
        resolve(service.id);
      }, service.duration);
    });
  };

  init();
  services.forEach((service) => {
    if (!service.dependancies.length) {
      startService(service).then((serviceId) => {
        if (nextServicetoRun(serviceId)) {
          startService(nextServicetoRun(serviceId)).then((serviceId) => {
            if (nextServicetoRun(serviceId)) {
              startService(nextServicetoRun(serviceId));
            }
          });
        }
      });
    }
  });
};
