import { services, startServiceWithCallback } from "./init.js";

services.forEach((service) => {
  if (service.dependancies === null) {
    startServiceWithCallback(service.id, service.duration);
  }
});
