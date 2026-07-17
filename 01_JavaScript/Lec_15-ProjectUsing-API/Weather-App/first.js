
async function Weather(){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=34a837db85d14800803204449262606&q=London&aqi=no`);
    // const yesterday = await fetch(`https://api.weatherapi.com/v1/history.json?key=YOUR_KEY&q=Bhopal&dt=YYYY-MM-DD`)
    const data = await response.json();
    console.log(data);
}   

Weather()