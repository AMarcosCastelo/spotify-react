const convertToHumanTime = (duration) => {
  if (!duration) return '0:00';
  let s = parseInt((duration / 1000) % 60, 10);
  const m = parseInt((duration / (1000 * 60)) % 60, 10);
  s = (s < 10) ? `0${s}` : s;

  return `${m}:${s}`;
}

const verifyStatus = (state) => {
  switch (state) {
    case 401:
      return {
        action: false,
        endPoint: '/Login'
      };
    case 200:
      return {
        action: true,
        endPoint: ''
      }
    default:
      break;
  }
}

export { convertToHumanTime, verifyStatus };
