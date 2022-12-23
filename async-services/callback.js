import { services, startService } from "./init.js";

services.forEach((s, i) => {
  if (!s.dependancies) {
    startService(i + 1, s.duration);
  }
});
