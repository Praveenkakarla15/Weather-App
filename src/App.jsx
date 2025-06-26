import { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "725bcb32957f238e7ca8ed76a012f5d9";

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setError("");
      } else {
        setError("City not found!");
        setWeatherData(null);
      }
    } catch (err) {
      setError("Error fetching data.");
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-500 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">🌤️ Weather App</h1>
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city name..."
          className="flex-grow px-4 py-3 rounded-xl outline-none border-2 border-yellow-400 focus:border-yellow-500 bg-yellow-100 text-black placeholder-gray-600 shadow-md focus:shadow-lg transition"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <button
          onClick={fetchWeather}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-200 mb-4">{error}</p>}

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
