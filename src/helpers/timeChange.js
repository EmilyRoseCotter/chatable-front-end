function timeChange(items) {
  let item;
  const time = new Date().getHours();
  if (time >= 6 && time < 12) {
    item = items.sunrise;
  } else if (time >= 12 && time < 19) {
    item = items.afternoon;
  } else {
    item = items.sunset;
  }

  return item;
}

export default timeChange;
