import {
  services,
  getStatusService,
  timeout,
  init,
  nextServicetoRun,
} from "./init.js";
export const initAsyncServices = () => {
  const startService = async (service) => {
    getStatusService(service.id, "start");
    await timeout(service.duration);
    getStatusService(service.id, "end");
    if (nextServicetoRun(service.id)) {
      startService(nextServicetoRun(service.id));
    }
  };

  init();
  services.forEach((service) => {
    if (!service.dependancies.length) {
      startService(service);
    }
  });
};
