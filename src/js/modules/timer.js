import declOfNum from './declOfNum.js';

// Форматирование вывода: добавляем нули, если меньше 10
const fTime = (time) => (time < 10 ? `0${time}` : time);

const timer = (deadline) => {
  const unitDay = document.querySelector('.timer__unit_day');
  const unitHour = document.querySelector('.timer__unit_hour');
  const unitMinute = document.querySelector('.timer__unit_minute');
  const descriptionDay = document.querySelector('.timer__unit-description_day');
  const descriptionHour = document.querySelector(
    '.timer__unit-description_hour',
  );
  const descriptionMinute = document.querySelector(
    '.timer__unit-description_minute',
  );

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;

    // const ms = timeRemaining;
    // console.log('ms: ', ms);
    // const s = timeRemaining / 1000 % 60;
    // console.log('s: ', s);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return { timeRemaining, minutes, hours, days };
  };

  const start = () => {
    const timer = getTimeRemaining();

    unitDay.textContent = fTime(timer.days);
    unitHour.textContent = fTime(timer.hours);
    unitMinute.textContent = fTime(timer.minutes);

    descriptionDay.textContent = declOfNum(timer.days, ['день', 'дня', 'дней']);
    descriptionHour.textContent = declOfNum(timer.hours, [
      'час',
      'часа',
      'часов',
    ]);
    descriptionMinute.textContent = declOfNum(timer.minutes, [
      'минута',
      'минуты',
      'минут',
    ]);

    const timerId = setTimeout(start, 30000);

    if (timer.timeRemaining < 0) {
      clearTimeout(timerId);
      unitDay.textContent = '00';
      unitHour.textContent = '00';
      unitMinute.textContent = '00';
    }
  };

  start();
};

export default timer;
