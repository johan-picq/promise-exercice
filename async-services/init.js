const services = [
  {
    denpendancies: null,
    duration: 9200,
  },
  {
    denpendancies: null,
    duration: 1400,
  },
  {
    denpendancies: null,
    duration: 7900,
  },
  {
    denpendancies: null,
    duration: 3000,
  },
  {
    denpendancies: [0, 1],
    duration: 2200,
  },
  {
    denpendancies: [2, 3],
    duration: 600,
  },
  {
    denpendancies: [4, 5],
    duration: 3200,
  },
];

function startService(service, duration) {
  if (duration) {
    setTimeout(() => {
      console.log("#", service, " started");
    }, duration);
  } else {
    console.log("#", service, " started");
  }
}
function endService(service, duration) {
  setTimeout(() => {
    console.log("#", service, " ended");
  }, duration);
}
