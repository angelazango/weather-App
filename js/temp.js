// let currCity = "Buea";
// let units = "metric";

// // Selectors

// // and so on for other elements...
// const city = document.querySelector('.weather__city');
// const datetime = document.querySelector(".weather__date-time");
// const weatherForecast = document.querySelector('.weather__forecast');
// const weatherTemperature = document.querySelector('.weather__temperature');
// const weatherIcon = document.querySelector('.weather__icon');
// const weatherMinMax = document.querySelector('.weather__minimax');
// const weatherRealFeel = document.querySelector('.weather__realfeel');
// const weatherHumidity = document.querySelector('.weather__humidity');
// const weatherWind = document.querySelector('.weather__wind');
// const weatherPressure = document.querySelector('.weather__pressure');
// const searchForm = document.querySelector('.weather__search');
// const searchInput = document.querySelector(".weather__searchform");
// const unitCelsius = document.querySelector('.weather__units_celsius');
// const unitFahrenheit = document.querySelector('.weather__units_fahrenheit');

// // Load stored city from local storage
// window.addEventListener('load', () => {
//     const storedCity = localStorage.getItem('city');
//     if (storedCity) {
//         currCity = storedCity;
//     }
//     getWeather(currCity, units);
// });

// searchForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
// })
// // Search
// searchInput.addEventListener('input', (e) => {
//     e.preventDefault()
//     currCity = searchInput.value.trim();
//     console.log(currCity);
//     if (currCity) {
//         getWeather(currCity, units);
//     }
// });

// // Units
// unitCelsius.addEventListener('click', () => {
//     if (units !== "metric") {
//         units = "metric";
//         getWeather(currCity, units);
//     }
// });

// unitFahrenheit.addEventListener('click', () => {
//     if (units !== "imperial") {
//         units = "imperial";
//         getWeather(currCity, units);
//     }
// });

// // Convert timestamp
// function convertTimestamp(timestamp, timezone) {
//     const convertTimezone = timezone / 3600; // Convert secs to hours
//     const date = new Date(timestamp * 1000);
//     const options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
//         hour12: true
//     };
//     return date.toLocaleString('en-Cameroon', options);
// }

// // Convert country code to name
// function convertCountryCode(country) {
//     const regionNames = new Intl.DisplayNames(['en'], { type: "region" });
//     return regionNames.of(country);
// }

// // // Get weather
// // function getWeather(city, units) {
// //     const API_KEY = '6cd5653f98bf9e30c4e762c6e2223db1';()
// //     fetch("https://api.openweathermap.org/data/2.5/weather?q=Buea&appid=${API_key}")
// //     // .then(res=>res.json()).then(data=>console.log(data))


// //         .then(res => res.json())
// //         .then(data => {
// //             if (data.cod === 200) {
// //                 city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
// //                 datetime.innerHTML = convertTimestamp(data.dt, data.timezone);
// //                 weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
// //                 weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176;`;
// //                 weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">`;
// //                 weatherMinMax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176; Max: ${data.main.temp_max.toFixed()}&#176;</p>`;
// //                 weatherRealFeel.innerHTML = `${data.main.feels_like.toFixed()}&#176;`;
// //                 weatherHumidity.innerHTML = `${data.main.humidity}%`;
// //                 weatherWind.innerHTML = `${data.wind.speed} m/s`;
// //                 weatherPressure.innerHTML = `${data.main.pressure} hPa`;
// //                 localStorage.setItem('city', city);
// //             } else {
// //                 city.innerHTML = 'City not found';
// //                 datetime.innerHTML = '';
// //                 weatherForecast.innerHTML = '';
// //                 weatherTemperature.innerHTML = '';
// //                 weatherIcon.innerHTML = '';
// //                 weatherMinMax.innerHTML = '';
// //                 weatherRealFeel.innerHTML = '';
// //                 weatherHumidity.innerHTML = '';
// //                 weatherWind.innerHTML = '';
// //                 weatherPressure.innerHTML = '';
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error fetching weather data:', error);
// //             city.innerHTML = 'Error fetching data';
// //             datetime.innerHTML = '';
// //             weatherForecast.innerHTML = '';
// //             weatherTemperature.innerHTML = '';
// //             weatherIcon.innerHTML = '';
// //             weatherMinMax.innerHTML = '';
// //             weatherRealFeel.innerHTML = '';
// //             weatherHumidity.innerHTML = '';
// //             weatherWind.innerHTML = '';
// //             weatherPressure.innerHTML = '';
// //         });
// // }

// function getWeather(cityName, units = 'metric') {
//     const API_KEY = '6cd5653f98bf9e30c4e762c6e2223db1';
    
//     // Fetch weather data
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`)
//         .then(res => res.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
//                 datetime.innerHTML = convertTimestamp(data.dt, data.timezone);
//                 weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
//                 weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176;`;
//                 weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">`;
//                 weatherMinMax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176; Max: ${data.main.temp_max.toFixed()}&#176;</p>`;
//                 weatherRealFeel.innerHTML = `${data.main.feels_like.toFixed()}&#176;`;
//                 weatherHumidity.innerHTML = `${data.main.humidity}%`;
//                 weatherWind.innerHTML = `${data.wind.speed} m/s`;
//                 weatherPressure.innerHTML = `${data.main.pressure} hPa`;
//                 localStorage.setItem('city', cityName);
//             } else {
//                 displayError('City not found');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             displayError('Error fetching data');
//         });
// }

// function displayError(message) {
//     city.innerHTML = message;
//     datetime.innerHTML = '';
//     weatherForecast.innerHTML = '';
//     weatherTemperature.innerHTML = '';
//     weatherIcon.innerHTML = '';
//     weatherMinMax.innerHTML = '';
//     weatherRealFeel.innerHTML = '';
//     weatherHumidity.innerHTML = '';
//     weatherWind.innerHTML = '';
//     weatherPressure.innerHTML = '';
// }

// // Example usage with form
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const cityName = document.querySelector('#cityInput').value;
//     getWeather(cityName);
// });




//second one
// let currCity = "Buea";
// let units = "metric";

// // Selectors
// const city = document.querySelector('.weather__city');
// const datetime = document.querySelector(".weather__date-time");
// const weatherForecast = document.querySelector('.weather__forecast');
// const weatherTemperature = document.querySelector('.weather__temperature');
// const weatherIcon = document.querySelector('.weather__icon');
// const weatherMinMax = document.querySelector('.weather__minimax');
// const weatherRealFeel = document.querySelector('.weather__realfeel');
// const weatherHumidity = document.querySelector('.weather__humidity');
// const weatherWind = document.querySelector('.weather__wind');
// const weatherPressure = document.querySelector('.weather__pressure');
// const searchForm = document.querySelector('.weather__search');
// const searchInput = document.querySelector(".weather__searchform");
// const unitCelsius = document.querySelector('.weather__units_celsius');
// const unitFahrenheit = document.querySelector('.weather__units_fahrenheit');
// const recentCitiesContainer = document.querySelector('.recent-cities'); // New container for recent cities

// // Load stored city from local storage
// window.addEventListener('load', () => {
//     const storedCity = localStorage.getItem('city');
//     if (storedCity) {
//         currCity = storedCity;
//     }
//     getWeather(currCity, units);
//     displayRecentCities(); // Display recent cities on page load
// });

// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
// });

// // Search
// searchInput.addEventListener('input', (e) => {
//     e.preventDefault();
//     currCity = searchInput.value.trim();
//     if (currCity) {
//         getWeather(currCity, units);
//     }
// });

// // Units
// unitCelsius.addEventListener('click', () => {
//     if (units !== "metric") {
//         units = "metric";
//         getWeather(currCity, units);
//     }
// });

// unitFahrenheit.addEventListener('click', () => {
//     if (units !== "imperial") {
//         units = "imperial";
//         getWeather(currCity, units);
//     }
// });

// // Convert timestamp
// function convertTimestamp(timestamp, timezone) {
//     const convertTimezone = timezone / 3600; // Convert secs to hours
//     const date = new Date(timestamp * 1000);
//     const options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
//         hour12: true
//     };
//     return date.toLocaleString('en-Cameroon', options);
// }

// // Convert country code to name
// function convertCountryCode(country) {
//     const regionNames = new Intl.DisplayNames(['en'], { type: "region" });
//     return regionNames.of(country);
// }

// // Get weather and save recent data
// function getWeather(cityName, units = 'metric') {
//     const API_KEY = '6cd5653f98bf9e30c4e762c6e2223db1';
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`)
//         .then(res => res.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 const cityData = {
//                     name: data.name,
//                     country: convertCountryCode(data.sys.country),
//                     temp: data.main.temp.toFixed(),
//                     condition: data.weather[0].main,
//                     datetime: convertTimestamp(data.dt, data.timezone)
//                 };

//                 // Update UI
//                 city.innerHTML = `${cityData.name}, ${cityData.country}`;
//                 datetime.innerHTML = cityData.datetime;
//                 weatherForecast.innerHTML = `<p>${cityData.condition}</p>`;
//                 weatherTemperature.innerHTML = `${cityData.temp}&#176;`;
//                 weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">`;
//                 weatherMinMax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176; Max: ${data.main.temp_max.toFixed()}&#176;</p>`;
//                 weatherRealFeel.innerHTML = `${data.main.feels_like.toFixed()}&#176;`;
//                 weatherHumidity.innerHTML = `${data.main.humidity}%`;
//                 weatherWind.innerHTML = `${data.wind.speed} m/s`;
//                 weatherPressure.innerHTML = `${data.main.pressure} hPa`;
                
//                 // Save the city data to local storage
//                 saveCityDataToLocalStorage(cityData);
//                 displayRecentCities(); // Update the recent cities display
//             } else {
//                 displayError('City not found');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             displayError('Error fetching data');
//         });
// }

// // Save city data to local storage
// function saveCityDataToLocalStorage(cityData) {
//     let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];

//     // Add or update the city in the list
//     recentCities = recentCities.filter(city => city.name !== cityData.name);
//     recentCities.unshift(cityData);

//     // Keep only the last 5 cities
//     if (recentCities.length > 5) {
//         recentCities.pop();
//     }

//     localStorage.setItem('recentCities', JSON.stringify(recentCities));
// }

// // Display recent cities on the UI
// function displayRecentCities() {
//     let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
//     recentCitiesContainer.innerHTML = ''; // Clear previous cities

//     recentCities.forEach(city => {
//         let cityElement = document.createElement('div');
//         cityElement.className = 'recent-city';
//         cityElement.innerHTML = `
//             <p><strong>${city.name}, ${city.country}</strong></p>
//             <p>${city.temp}&#176; - ${city.condition}</p>
//             <p>${city.datetime}</p>
//         `;
//         cityElement.addEventListener('click', () => {
//             getWeather(city.name);
//         });
//         recentCitiesContainer.appendChild(cityElement);
//     });
// }

// function displayError(message) {
//     city.innerHTML = message;
//     datetime.innerHTML = '';
//     weatherForecast.innerHTML = '';
//     weatherTemperature.innerHTML = '';
//     weatherIcon.innerHTML = '';
//     weatherMinMax.innerHTML = '';
//     weatherRealFeel.innerHTML = '';
//     weatherHumidity.innerHTML = '';
//     weatherWind.innerHTML = '';
//     weatherPressure.innerHTML = '';
// }

// // Example usage with form
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const cityName = document.querySelector('#cityInput').value;
//     getWeather(cityName);
// });


let currCity = "Buea";
let units = "metric";

// Selectors
const city = document.querySelector('.weather__city');
const datetime = document.querySelector(".weather__date-time");
const weatherForecast = document.querySelector('.weather__forecast');
const weatherTemperature = document.querySelector('.weather__temperature');
const weatherIcon = document.querySelector('.weather__icon');
const weatherMinMax = document.querySelector('.weather__minimax');
const weatherRealFeel = document.querySelector('.weather__realfeel');
const weatherHumidity = document.querySelector('.weather__humidity');
const weatherWind = document.querySelector('.weather__wind');
const weatherPressure = document.querySelector('.weather__pressure');
const searchForm = document.querySelector('.weather__search');
const searchInput = document.querySelector(".weather__searchform");
const unitCelsius = document.querySelector('.weather__units_celsius');
const unitFahrenheit = document.querySelector('.weather__units_fahrenheit');
const recentCitiesContainer = document.querySelector('.recent-cities'); // Container for recent cities

// Load stored city from local storage
window.addEventListener('load', () => {
    const storedCity = localStorage.getItem('city');
    if (storedCity) {
        currCity = storedCity;
    }
    getWeather(currCity, units);
    displayRecentCities(); // Display recent cities on page load
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Search
searchInput.addEventListener('input', (e) => {
    e.preventDefault();
    currCity = searchInput.value.trim();
    if (currCity) {
        getWeather(currCity, units);
    }
});

// Units
unitCelsius.addEventListener('click', () => {
    if (units !== "metric") {
        units = "metric";
        getWeather(currCity, units);
    }
});

unitFahrenheit.addEventListener('click', () => {
    if (units !== "imperial") {
        units = "imperial";
        getWeather(currCity, units);
    }
});

// Convert timestamp
function convertTimestamp(timestamp, timezone) {
    const convertTimezone = timezone / 3600; // Convert secs to hours
    const date = new Date(timestamp * 1000);
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        hour12: true
    };
    return date.toLocaleString('en-Cameroon', options);
}

// Convert country code to name
function convertCountryCode(country) {
    const regionNames = new Intl.DisplayNames(['en'], { type: "region" });
    return regionNames.of(country);
}

// Get weather and save recent data
function getWeather(cityName, units = 'metric') {
    const API_KEY = '6cd5653f98bf9e30c4e762c6e2223db1';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                const cityData = {
                    name: data.name,
                    country: convertCountryCode(data.sys.country),
                    temp: data.main.temp.toFixed(),
                    condition: data.weather[0].main,
                    datetime: convertTimestamp(data.dt, data.timezone)
                };

                // Update UI
                city.innerHTML = `${cityData.name}, ${cityData.country}`;
                datetime.innerHTML = cityData.datetime;
                weatherForecast.innerHTML = `<p>${cityData.condition}</p>`;
                weatherTemperature.innerHTML = `${cityData.temp}&#176;`;
                weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">`;
                weatherMinMax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176; Max: ${data.main.temp_max.toFixed()}&#176;</p>`;
                weatherRealFeel.innerHTML = `${data.main.feels_like.toFixed()}&#176;`;
                weatherHumidity.innerHTML = `${data.main.humidity}%`;
                weatherWind.innerHTML = `${data.wind.speed} m/s`;
                weatherPressure.innerHTML = `${data.main.pressure} hPa`;
                
                // Save the city data to local storage
                saveCityDataToLocalStorage(cityData);
                displayRecentCities(); // Update the recent cities display
            } else {
                displayError('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayError('Error fetching data');
        });
}

// Save city data to local storage
function saveCityDataToLocalStorage(cityData) {
    let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];

    // Add or update the city in the list
    recentCities = recentCities.filter(city => city.name !== cityData.name);
    recentCities.unshift(cityData);

    // Keep only the last 5 cities
    if (recentCities.length > 2) {
        recentCities.pop();
    }

    localStorage.setItem('recentCities', JSON.stringify(recentCities));
}

// Display recent cities on the UI
function displayRecentCities() {
    let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
    recentCitiesContainer.innerHTML = ''; // Clear previous cities

    recentCities.forEach((city, index) => {
        let cityElement = document.createElement('div');
        cityElement.className = 'recent-city';
        cityElement.innerHTML = `
            <p><strong>${city.name}, ${city.country}</strong></p>
            <p>${city.temp}&#176; - ${city.condition}</p>
            <p>${city.datetime}</p>
            <button class="delete-city" data-index="${index}">Delete</button>
        `;
        cityElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-city')) {
                deleteCity(index); // Delete city on button click
            } else {
                getWeather(city.name);
            }
        });
        recentCitiesContainer.appendChild(cityElement);
    });
}

// Delete city from local storage
function deleteCity(index) {
    let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
    recentCities.splice(index, 1); // Remove the city at the specified index
    localStorage.setItem('recentCities', JSON.stringify(recentCities));
    displayRecentCities(); // Update the recent cities display
}

function displayError(message) {
    city.innerHTML = message;
    datetime.innerHTML = '';
    weatherForecast.innerHTML = '';
    weatherTemperature.innerHTML = '';
    weatherIcon.innerHTML = '';
    weatherMinMax.innerHTML = '';
    weatherRealFeel.innerHTML = '';
    weatherHumidity.innerHTML = '';
    weatherWind.innerHTML = '';
    weatherPressure.innerHTML = '';
}

// Example usage with form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cityName = document.querySelector('#cityInput').value;
    getWeather(cityName);
});
