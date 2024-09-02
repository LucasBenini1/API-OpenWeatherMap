
const apiKey = '052266569747a3b2be260d96d1944696';

document.getElementById("botao").addEventListener("click", async function clima(){
    const city = document.getElementById("city").value;
    document.getElementById("temp").innerHTML = "Carregando..."
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)

        if (response.status === 200) {
            console.log(json);
            console.log(`Temperatura em ${city}: ${json.main.temp}°C`);
            console.log(`Descrição: ${json.weather[0].description}`);
            console.log(`Sensação Térmica: ${json.main.feels_like}`);

            document.getElementById("cidade").innerHTML = `${city}`;
            document.getElementById("temp").innerHTML = `Temperatura: ${json.main.temp}°C`;
            document.getElementById('min').innerHTML = `Mínima: ${json.main.temp_min} °C`;
            document.getElementById('max').innerHTML = `Máxima: ${json.main.temp_max} °C`;
            document.getElementById("sens").innerHTML = `Sensação Térmica: ${json.main.feels_like}`;
            document.getElementById("visi").innerHTML = `Visibilidade: ${json.visibility} m`;
            document.getElementById("wind").innerHTML = `Velocidade do vento: ${json.wind.speed} km/h`;
        } else {
            document.getElementById("temp").innerHTML = "Cidade não encontrada. Por favor, tente novamente.";
            document.getElementById("cidade").innerHTML = "";
            document.getElementById('min').innerHTML = "";
            document.getElementById('max').innerHTML = "";
            document.getElementById("visi").innerHTML = "";
            document.getElementById("sens").innerHTML = "";
            document.getElementById("wind").innerHTML = "";
        }

    }catch(error){
        console.log(error)
    }
  })