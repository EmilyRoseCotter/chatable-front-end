function imageTimeChange(images) {
  let image;
  const time = new Date().getHours();
  if (time >= 6 && time < 12) {
    image = images.sunrise;
  } else if (time >= 12 && time < 19) {
    image = images.afternoon;
  } else {
    image = images.sunset;
  }

  return image;
}

export default imageTimeChange;
