import {
  services,
  startServiceWithCallback,
  startServiceCallback,
} from "./init.js";

services.forEach((service) => {
  if (service.dependancies === null) {
    return startServiceWithCallback(
      service.id,
      service.duration,
      startServiceCallback
    );
  }
});
