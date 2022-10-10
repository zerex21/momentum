import {shownDate} from './shownDate.js'

let currentTime = document.querySelector('.time'),
    currentDate = document.querySelector('.date');

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let ruDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let ruMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь', ];





let showDate = () => {
    let date= shownDate()
  
    currentDate.innerHTML = `${days[date.day]}, ${months[date.month]} ${date.monthDay}`;
}

let showTime = () => {
    let date= shownDate()

    currentTime.innerHTML = `${(date.hours>9)?date.hours:'0'+date.hours}:${(date.minutes>9)?date.minutes:'0'+date.minutes}:${(date.seconds>9)?date.seconds:'0'+date.seconds}`;

}
setInterval(showTime, 1000)
setInterval(showDate, 1000)

export {
    showTime,
    showDate
}