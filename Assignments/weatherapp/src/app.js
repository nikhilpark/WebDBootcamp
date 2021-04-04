const ipBox = document.querySelector("#ipbox")
const s3 = document.querySelector("#s3")
s3.style="display:none"

ipBox.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        let city = ipBox.value; 
        fetchApi(city)
       
    }

})


function fetchApi(city) {
    const api_key = "b41cca6b4f5592308fa8b579b37903ac"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key



    fetch(url)
        .then(res => {
            if (res.ok) {
                console.log("success");    
                res.json()
                    .then(data => {let fetchedData=data
                        console.log(data);
                        s2.style="display:none"
                        const wDesc = fetchedData.weather[0].main;
                        const temp = Math.round(fetchedData.main.temp -273.15) + "°C";
                        const minTemp = Math.round(fetchedData.main.temp_min -273.15) + "°C";
                        const maxTemp = Math.round(fetchedData.main.temp_max -273.15) + "°C";
                        const windSpeed = (fetchedData.wind.speed *3.6).toFixed(2) + " Km/h" ;
                        const windDeg = fetchedData.wind.deg;
                        const percep = fetchedData.clouds.all + "%";
                        const windDir= compass(windDeg);
                        const mmTemp = minTemp + " / " + maxTemp
                        
                        //console.log(wDesc + "  " + windSpeed + "   " + percep )



                        let tempCont = document.querySelector("#temp");
                        let descCont = document.querySelector("#desc");
                        let windDirCont = document.querySelector("#wind-dir");
                        let windSpeedCont = document.querySelector("#wind-speed");
                        let percepCont = document.querySelector("#percep");
                        let mmTempCont = document.querySelector("#mmtemp");
                         




                        s3.style="display:block;"
                        tempCont.innerText =  temp; 
                        descCont.innerText = wDesc;
                        windDirCont.innerText = windDir;
                        windSpeedCont.innerText = windSpeed;
                        percepCont.innerText = percep;
                        mmTempCont.innerText =mmTemp;

                        
                    })
            } else {
                let errorCont = document.querySelector("#error");
                errorCont.innerText =  "An Error has Occured!"
            }

        })

} 

function compass(deg){
        let windDir = ""
    if (deg == 0 || deg == 360){
         windDir = "North"}
        else if(90 > deg > 0){
        windDir = "North-East"}
        else if(deg === 90){
        windDir = "East"}
        else if (90 < deg < 180){
        windDir = "South-East"}
        else if (deg === 180){
        windDir = "South"}
        else if (180 < deg < 270){
        windDir = "South-West"}
        else if (270 < deg < 360){
        windDir = "North-West"}
        return windDir
}