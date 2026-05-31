# 🌤️ Weather App
A React-based responsive web application that provides real-time weather information for any city worldwide using the OpenWeatherMap API and seamless user experience across devices.

## Live Demo

https://react-weather-avishek.netlify.app

## Screenshot

![Weather App Screenshot](./screenshot.png)

## Features

* Search weather by city name
* Real-time weather updates
* Temperature, humidity, and weather conditions
* Feels-like temperature
* Dynamic weather icons
* Responsive design for desktop and mobile
* Error handling for invalid city names
* Weather-based background images

## Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Material UI (MUI)
- OpenWeatherMap API
- Vite
- Netlify

## Installation

```bash
git clone https://github.com/AvishekAmin/weather-app.git
cd weather-app
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

## Project Structure

```text
weather-app/
├── src/
│   ├── assets/
│   │   ├── cold_img.jpg
│   │   ├── hot_img.jpg
│   │   └── rain_img.jpg
│   │
│   ├── App.jsx
│   ├── InfoBox.css
│   ├── InfoBox.jsx
│   ├── SearchBox.css
│   ├── SearchBox.jsx
│   ├── WeatherApp.css
│   ├── WeatherApp.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
|── Screenshot.png
└── README.md
```


## Author 

Avishek Amin 
GitHub: https://github.com/AvishekAmin 
LinkedIn: https://www.linkedin.com/in/avishekamin
Email: avishekamin207@gmail.com