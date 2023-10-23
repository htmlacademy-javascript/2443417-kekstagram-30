const timeToMinutes = (time) => {
  const t = time.split(':');
  return parseInt(t[0], 10) * 60 + parseInt(t[1], 10);
};

const workTime = (dayStart, dayEnd, eventStart, eventDuration) => {
  return timeToMinutes(dayStart) <= timeToMinutes(eventStart)
    && timeToMinutes(dayEnd) >= timeToMinutes(eventStart) + eventDuration;
};

workTime('14:00', '17:30', '08:0', 90);
