function getClassName(styles) {
  let className;
  const time = new Date().getHours();
  if (time >= 6 && time < 12) {
    className = styles.sunrise;
  } else if (time >= 12 && time < 19) {
    className = styles.afternoon;
  } else {
    className = styles.sunset;
  }

  return className;
}

export default getClassName;
