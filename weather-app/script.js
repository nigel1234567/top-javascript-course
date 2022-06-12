const content = document.getElementById('content')
fetch('https://api.openweathermap.org/data/2.5/weather?lat=1.3521&lon=103.8198&appid=f1a53d0c747909e4c2bfef572343872d', {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response)

    // Show loading screen
    let loading = document.createElement('h1')
    loading.innerHTML = `Fetching the weather information for ${response.name}...`
    content.appendChild(loading)

    // Get weather information
    let weather = document.createElement('h1')
    weather.innerHTML = `The current weather in ${response.name} is: ${response.weather[0].main}`
    const getContent = setTimeout(() => {
        content.removeChild(loading)
        content.appendChild(weather)
    }, 5000)
});

