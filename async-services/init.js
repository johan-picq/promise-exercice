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
    dependancies: 1,
    duration: 2200,
  },
  {
    id: 6,
    dependancies: 3,
    duration: 600,
  },
  {
    id: 7,
    dependancies: 5,
    duration: 3200,
  },
];
const TotalDurationServices = 16000;
let timer = 0;
export const initTimer = () => {
  const interval = setInterval(() => {
    timer = timer + 100;
    if (timer >= TotalDurationServices) {
      clearInterval(interval);
      timer = 0;
    }
  }, 100);
};

const getTimer = () => {
  return timer;
};

export const getStatusService = (service, status) => {
  console.log(
    "#",
    service,
    status === "start" ? "started at" : "ended at",
    getTimer(),
    "ms"
  );
};
