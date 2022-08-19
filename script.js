document.getElementById('LocButton').onclick = function () { getLocation() }

function getLocation(){
    document.getElementById('ContrySelector').style.display="block"

}

document.getElementById('ContrySelector').onchange = function () { getWither() }
function getWither(){

// ************* ''''''''' حسبي الله في الجافا والي اخترع الجافا 3 ساعات على كوتيشين ناسيها حسبي الله بس  ********************



let select=document.getElementById('ContrySelector');
var CityName = select.options[select.selectedIndex].value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+CityName+'&appid=cad7ec124945dcfff04e457e76760d90')
 
    .then(response => response.json())
    .then(data => { 
      var tempValue  = data['main']['temp'];
      var nameValue  = data['name']+", "+data['sys']['country'];
      var descValue  = data['weather'][0]['description'];
      var iconWether = data['weather'][0]['icon'];
      var humidity   = data['main']['humidity'];
      var windSpeed  = data['wind']['speed'];
    
      document.getElementById('ContryName').innerHTML = nameValue;
      document.getElementById('WetherDescription').innerHTML =descValue;
      document.getElementById('WeatherTemp').innerHTML =Math.round(tempValue - 273.15)+"°C";
      document.getElementById('Icon').src = "http://openweathermap.org/img/wn/"+iconWether+"@2x.png";
      document.getElementById('humi').innerHTML = humidity+'%';
      document.getElementById('wSpeed').innerHTML = windSpeed+' km/h';

     
    })
    
    .catch(err => alert("Please select a contry!"));


//  ***********************************************  For date  *************************************************

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('ToDate').innerHTML = date;


var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("Day-Now").innerHTML = days[today.getDay()];
  
}




// {"coord":{"lon":35.945,"lat":31.9552},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
// "base":"stations",
// "main":{"temp":301.2,"feels_like":300.79,"temp_min":301.2,"temp_max":301.9,"pressure":1008,"humidity":39},
// "visibility":7000,
// "wind":{"speed":3.09,"deg":250},
// "clouds":{"all":0},"dt":1660843841,
// "sys":{"type":1,"id":7520,"country":"JO","sunrise":1660791762,"sunset":1660839472},
// "timezone":10800,
// "id":250441,
// "name":"Amman",
// "cod":200}



