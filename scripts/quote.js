import {getRandomInt} from './sliderDom.js'


let setQuote = document.querySelector('.quote')
let setAuthor = document.querySelector('.author')
let changeQuote = document.querySelector('.change-quote')



let getRandomNum = getRandomInt(1, 1643)

async function getQuotes() {
    try {
        const quotes = 'https://type.fit/api/quotes';
        const res = await fetch(quotes);
        const data = await res.json();
        setQuote.textContent = data[getRandomNum].text
        setAuthor.textContent = data[getRandomNum].author
    } catch (err) {

    }
}

changeQuote.addEventListener('click', ()=>{
    getRandomNum = getRandomInt(1, 1643)
    getQuotes(getRandomNum)
})

getQuotes()


export {
    getQuotes
}