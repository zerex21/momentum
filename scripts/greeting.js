import {shownDate} from './shownDate.js'

let greeting = document.querySelector('.greeting');
let inputName = document.querySelector('.name');

let greet = ['Good morning','Good afternoon','Good evening','Good night'];
let ruGreet = ['Доброе утро','Добрый день','Добрый вечер','Доброй ночи']

let clockDay=''

let showGreet = () =>{

   let date= shownDate()

   clockDay = `${(date.hour >= 6 && date.hour < 12)?greet[0]:
                            (date.hour >= 12 && date.hour < 18)?greet[1]:
                            (date.hour >= 18 && date.hour < 24)?greet[2]:greet[3]}` 
 greeting.innerHTML=clockDay
 return clockDay
}

setInterval(showGreet,1000)

export {showGreet}