
async function Weather(name){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=34a837db85d14800803204449262606&q=${name}&aqi=no`);
    // const yesterday = await fetch(`https://api.weatherapi.com/v1/history.json?key=YOUR_KEY&q=Bhopal&dt=YYYY-MM-DD`)
    const data = await response.json();
  
          // catch the div  today 
    const today = document.querySelector(".todayWeather");
    today.innerHTML = "";

    const img = document.createElement("img");
    img.src = "https:" + data.current.condition.icon;

    const icon = document.createElement('div');
    icon.append(img)
    icon.alt = "weather icon";

    const city =  document.createElement('h2');
    city.textContent = `City : ${data.location.name}`;
    city.className = 'city';

    const temp =  document.createElement('h1');
    temp.innerHTML = `Temp : ${data?.current?.temp_c}°C`;
    temp.className = 'temp';

    const wind =  document.createElement('p');
    wind.textContent = `Wind Presure : ${data.current.wind_kph} kph`;
    wind.className = 'wind';
    
    today.append(icon,city,temp,wind)

}

          // ========  Today ===== //
const input  = document.querySelector('input');
const button = document.getElementById("searchBtn");
let value1 = '';
  
button.addEventListener('click',()=>{
    const value = input.value;
    if(value == ""){
        alert("Fill the City name");
        return;
    }

    Weather(value);
    value1 = value;
    input.value = ""; 
})


// ================= YESTERDAY BUTTON =================
async function Yesterdayweather(currentCity) {

    const date = new Date();
    date.setDate(date.getDate() - 1);
    const formatted = date.toISOString().split("T")[0];

    const res = await fetch(`https://api.weatherapi.com/v1/history.json?key=34a837db85d14800803204449262606&q=${currentCity}&dt=${formatted}`);

    const data = await res.json();
    const temp = data.forecast.forecastday[0].day.avgtemp_c;
          // select div
        const yesterday = document.querySelector(".yesterday");
        yesterday.innerHTML = "";

        const p = document.createElement('p');
        p.textContent = `Yesterday Avg Temp: ${temp}°C`;
        p.className = 'para'

        yesterday.append(p)
};

const yesterdayBtn = document.querySelector(".yesterdayBtn");
yesterdayBtn.addEventListener('click',()=>{
    console.log(value1)
    if(value1 == ""){

        alert("Fill the City name");
        return;
    }
    Yesterdayweather(value1)

})



// ================= TOMORROW BUTTON =================
async function Tomorrowweather(currentCity) {

    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=34a837db85d14800803204449262606&q=${currentCity}&days=2`);
    const data = await res.json();

    const temp = data.forecast.forecastday[1].day.avgtemp_c;
      // select div
    const tomorrow = document.querySelector(".tomorrow");
    tomorrow.innerHTML = "";  

    const p = document.createElement('p');
    p.textContent = `Tomorrow Avg Temp: ${temp}°C`;
    p.className = 'para'
    
    tomorrow.append(p)
};

const tomorrowBtn = document.querySelector(".tomorrowBtn");
tomorrowBtn.addEventListener('click',()=>{
    if(value1 == ""){

        alert("Fill the City name");
        return;
    }
    Tomorrowweather(value1)

})