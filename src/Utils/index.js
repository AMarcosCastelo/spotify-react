const convertToHumanTime = (duration) => {
  if (!duration) return '0:00';
  let s = parseInt((duration / 1000) % 60, 10);
  const m = parseInt((duration / (1000 * 60)) % 60, 10);
  s = (s < 10) ? `0${s}` : s;

  return `${m}:${s}`;
}

export default convertToHumanTime;
