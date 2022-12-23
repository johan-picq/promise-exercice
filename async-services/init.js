export const services = [
  {
    id: 1,
    dependancies: null,
    duration: 9200,
  },
  {
    id: 2,
    dependancies: null,
    duration: 1400,
  },
  {
    id: 3,
    dependancies: null,
    duration: 7900,
  },
  {
    id: 4,
    dependancies: null,
    duration: 3000,
  },
  {
    id: 5,
    dependancies: 0,
    duration: 2200,
  },
  {
    id: 6,
    dependancies: 2,
    duration: 600,
  },
  {
    id: 7,
    dependancies: 4,
    duration: 3200,
  },
];
const TotalDurationServices = 16000;
let timer = 0;

export const startServiceWithCallback = (service, duration) => {
  let nextServiceToWork = null;
  services.forEach((service) => {
    if (service.dependancies === service) {
      nextServiceToWork = service;
    }
  });
  console.log("#", service, "started at", timer, "ms");
  setTimeout(() => {
    console.log("#", service, "ended at", timer, "ms");
    if (nextServiceToWork) {
      console.log("next");
      startServiceWithCallback(
        nextServiceToWork.id,
        nextServiceToWork.duration
      );
    }
  }, duration);
};

let interval = setInterval(() => {
  timer = timer + 100;
  if (timer >= TotalDurationServices) {
    clearInterval(interval);
  }
}, 100);
