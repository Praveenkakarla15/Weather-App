import { WiHumidity, WiStrongWind, WiThermometer, WiBarometer } from "react-icons/wi";

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-2xl w-full max-w-md text-center space-y-4">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-lg capitalize">{weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
        alt="Weather Icon"
        className="mx-auto"
      />
      <h3 className="text-4xl font-bold">{Math.round(main.temp)}°C</h3>

      <div className="grid grid-cols-2 gap-4 text-sm mt-4">
        <div className="flex items-center justify-center space-x-2">
          <WiHumidity className="text-blue-500 text-2xl" />
          <span>Humidity: {main.humidity}%</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <WiStrongWind className="text-green-500 text-2xl" />
          <span>Wind: {wind.speed} m/s</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <WiThermometer className="text-red-500 text-2xl" />
          <span>Feels Like: {Math.round(main.feels_like)}°C</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <WiBarometer className="text-purple-500 text-2xl" />
          <span>Pressure: {main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
