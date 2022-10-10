

let userName = document.querySelector('.name')
let weatherCity = document.querySelector('.city');

function setLocalStorage() {
    localStorage.setItem('name', userName.value);
    localStorage.setItem('city', weatherCity.value);

  }

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
     
    }
    if(localStorage.getItem('city')){
      weatherCity.value = localStorage.getItem('city');
     
    }
  }
/*   localStorage.removeItem('city')
  localStorage.removeItem('name') */
  window.addEventListener('beforeunload', setLocalStorage)
  window.addEventListener('load', getLocalStorage)

  export{setLocalStorage, getLocalStorage}