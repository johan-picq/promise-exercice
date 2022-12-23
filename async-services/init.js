export const services = [
  {
    dependancies: null,
    duration: 9200,
  },
  {
    dependancies: null,
    duration: 1400,
  },
  {
    dependancies: null,
    duration: 7900,
  },
  {
    dependancies: null,
    duration: 3000,
  },
  {
    dependancies: [0, 1],
    duration: 2200,
  },
  {
    dependancies: [2, 3],
    duration: 600,
  },
  {
    dependancies: [4, 5],
    duration: 3200,
  },
];
const TotalDurationServices = 16000;
let timer = 0;

export function startService(service, duration) {
  console.log("#", service, "started at", timer, "ms");
  setTimeout(() => {
    console.log("#", service, "ended at", timer, "ms");
  }, duration);
}

let interval = setInterval(() => {
  timer = timer + 100;
  if (timer >= TotalDurationServices) {
    clearInterval(interval);
  }
}, 100);
