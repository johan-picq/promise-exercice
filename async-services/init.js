export let services = [
  {
    id: 1,
    dependancies: [],
  },
  {
    id: 2,
    dependancies: [],
  },
  {
    id: 3,
    dependancies: [],
  },
  {
    id: 4,
    dependancies: [],
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

let timer = 0;
let servicesDone = [];
totalDurationServices = 0;

export const init = () => {
  services.forEach((e) => {
    e.duration = Math.round(Math.random() * 100) * 100;
  });
  // get total duration
  document
    .querySelectorAll(".service")
    .forEach((s) => (s.style.background = "#fff"));
  document
    .querySelectorAll(".service.button")
    .forEach((b) => (b.disabled = true));
  document.querySelectorAll(".started").forEach((s) => (s.innerHTML = ""));
  document.querySelectorAll(".ended").forEach((s) => (s.innerHTML = ""));
  document.querySelector("#global-status").style.background = "yellow";
  document.querySelector("#global-status").innerHTML = "running";
  const interval = setInterval(() => {
    timer = timer + 100;
    if (timer > totalDurationServices) {
      clear(interval);
    }
  }, 100);
};

const clear = (interval) => {
  clearInterval(interval);
  console.log("all services are over after ", getTimer());
  document.querySelector("#global-status").style.background = "green";
  document.querySelector("#global-status").innerHTML =
    "all services are over after " + getTimer("s");
  document
    .querySelectorAll(".service.button")
    .forEach((b) => (b.disabled = false));
  timer = 0;
  servicesDone = [];
};

const getTimer = (unit = "ms") => {
  if (unit === "s") {
    return timer / 1000 + "s";
  } else {
    return timer + "ms";
  }
};

export const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getStatusService = (serviceId, status) => {
  if (status === "start") {
    document.querySelector("#service" + serviceId).style.background = "yellow";
    document.querySelector("#service" + serviceId + " .started").innerHTML =
      "started at " + getTimer("s");
    console.log("#", serviceId, "started at", getTimer());
  } else {
    document.querySelector("#service" + serviceId).style.background = "green";
    document.querySelector("#service" + serviceId + " .ended").innerHTML =
      "ended at " + getTimer("s");
    console.log("#", serviceId, "ended at", getTimer());
    servicesDone.push(serviceId);
    if (services.length === serviceId) {
      clear();
    }
  }
};

export const nextServicetoRun = (serviceId) => {
  let nextService = null;
  services.forEach((service) => {
    if (
      !servicesDone.includes(service) &&
      service.dependancies.includes(serviceId)
    ) {
      if (service.dependancies.every((d) => servicesDone.includes(d))) {
        nextService = service;
      }
    }
  });
  return nextService;
};
