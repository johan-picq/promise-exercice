export let services = [
  {
    id: 1,
    dependancies: null,
  },
  {
    id: 2,
    dependancies: null,
  },
  {
    id: 3,
    dependancies: null,
  },
  {
    id: 4,
    dependancies: null,
  },
  {
    id: 5,
    dependancies: [1, 2],
  },
  {
    id: 6,
    dependancies: [3, 4],
  },
  {
    id: 7,
    dependancies: [5, 6],
  },
];
let totalDurationServices = 0;
let timer = 0;

const getRandomTimer = () => {
  return Math.round(Math.random() * 100) * 100;
};

services.forEach((e) => {
  e.duration = getRandomTimer();
  totalDurationServices += e.duration;
});

console.log(services);
export const initTimer = () => {
  const interval = setInterval(() => {
    timer = timer + 100;
    if (timer > totalDurationServices) {
      clearInterval(interval);
      timer = 0;
    }
  }, 100);
};

const getTimer = (unit = "ms") => {
  if (unit === "s") {
    return timer / 1000;
  } else {
    return timer;
  }
};

export const getStatusService = (service, status) => {
  if (status === "start") {
    document.querySelector("#service" + service).style.background = "yellow";
    document.querySelector("#service" + service + " .started").innerHTML =
      "started at " + getTimer("s") + "s";
    console.log("#", service, "started at", getTimer(), "ms");
  } else {
    document.querySelector("#service" + service).style.background = "green";
    document.querySelector("#service" + service + " .ended").innerHTML =
      "ended at " + getTimer("s") + "s";
    console.log("#", service, "endeed at", getTimer(), "ms");
  }
};

export const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
