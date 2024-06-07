let lon;
let lat;
let temperature = document.querySelector(".temp")
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
let icon = document.querySelector(".icon")





window.addEventListener("load" , () => {



if (navigator.geolocation){

navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;

    
    // ID API

     const api_id = `212b8cee822b2da8b1e10ea310bc454e`;


    const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_id}`;

    fetch(url_base)
    .then((response) => {
        console.log("RESPUESTA JSON");
        return response.json();
    })

    .then((data) => {
        console.log("ESTA ES LA DATA")
        console.log(data);

        var temp = data["main"]["temp"];
        var desc = data["weather"][0]["description"];
        var location = data["name"];

        console.log("desc " + desc);
        console.log("temp " + temp);
        console.log("loc" + location);

        temperature.innerHTML = temp;
        summary.innerHTML = desc;
        loc.innerHTML = location;
    })
})
}
})