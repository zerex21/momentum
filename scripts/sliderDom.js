import {showGreet} from './greeting.js'


let slideNext = document.querySelector('.slide-next')
let slidePrev = document.querySelector('.slide-prev')


let clockDay= showGreet()

let timeDay = (clockDay === 'Good morning')? 'morning': (clockDay === 'Good afternoon') ? 'afternoon': (clockDay === 'Good evening') ? 'evening' : 'night'



function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max-min) + min);
  }

  let randomNum = getRandomInt(1,20);

  let checkNumber = () => {
    if(randomNum<=9){
        randomNum = '0'+randomNum
    }
  }

let changeImg = () =>  document.body.style.backgroundImage =`url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeDay}/${randomNum}.jpg')`;

let setImgBody = () =>{
    checkNumber()
    changeImg()

}

setImgBody()

slideNext.addEventListener('click', ()=>{
    randomNum++
    if(randomNum > 20){
        randomNum = 1
    }
    checkNumber()
    changeImg()

    return randomNum
})

slidePrev.addEventListener('click', ()=>{
    randomNum--
    if(randomNum < 1){
        randomNum = 20
    }
    checkNumber()
    changeImg()

    return randomNum
})

export{
    setImgBody,getRandomInt
}