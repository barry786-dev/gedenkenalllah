dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
  const targetDate = dayjs(dateString);
  //   element.querySelector('.className').textContent = `${targetDate('D MMMM YYYY')}`
  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));

    if (duration.asMilliseconds() <= 0) return;

    element.querySelector('.seconds_numbers').textContent = duration
      .seconds()
      .toString()
      .padStart(2, '0');
    element.querySelector('.minutes_numbers').textContent = duration
      .minutes()
      .toString()
      .padStart(2, '0');
    element.querySelector('.hours_numbers').textContent = duration
      .hours()
      .toString()
      .padStart(2, '0');
    element.querySelector('.days__numbers').textContent = duration
      .asDays()
      .toFixed(0)
      .toString()
      .padStart(2, '0');
  }, 250);
}

activateCountdown(document.getElementById('timer'), '2022-12-31');
