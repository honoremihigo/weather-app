const ApiKey = 'ea528a29c9f0625ff8ca26ac47ff8645'
async function AddWeather(){
    var InsertedCity = document.querySelector('.city').value
    const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${InsertedCity}`
    const response = await fetch(API + `&appid=${ApiKey}`)
    var see = await response.json()
    console.log(see);
    document.querySelector('.location-name').innerHTML = see.name;
    document.querySelector('.temp').innerHTML = see.main.temp +' C';
    document.querySelector('.humid').innerHTML = see.main.humidity + '%';
    document.querySelector('.wind-speed').innerHTML = see.wind.speed +' km/h';
    document.querySelector('.location-name').innerHTML = see.name;
    InsertedCity.value = ''
}

var btn = document.querySelector('.btn')
var input = document.querySelector('.city')
btn.addEventListener('click',function (){
   AddWeather() 
    
})


var input = document.querySelector('.input')
var h1 = document.querySelector('#demo')

input.oninput = function(){
    input.value =
    h1.innerHTML = input.value * 200 + ' RWF'
}