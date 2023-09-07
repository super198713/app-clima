import { useState } from "react"

const WeatherCard = ({weather, temp}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = ( ) => setIsCelsius(!isCelsius)

  
    
  return (
   
    <article className="clima">
      <div className="clima__gradiant ">
        <div  className="clima__titulo subtitulo">
          <h1> weather App</h1>
          <h2 >{weather?.name}, {weather?.sys.country}</h2>
        </div>
        
        <div className="clima__imagen">
          <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` } 
            alt="" />
        </div>
          
        <section className="clima__description">
          <h3 >"{weather?.weather[0].description}"</h3>   
            <ul>
              <li>wind speed<span className="clima__description1">{weather?.wind.speed} m/s</span></li>
              <li>clouds<span className="clima__description1">{weather?.clouds.all} %</span></li>
              <li>pressure<span className="clima__description1">{weather?.main.pressure} hPa</span></li>
            </ul>
        </section> 
        <div className="clima__temperatura">
              <h2 className="clima__grados">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
              <button onClick={handleChangeTemp} className="boton">{isCelsius ? 'Change to °C' : 'Change  to °F'} </button>
        </div>
      </div>     
    </article>
  ) 
}

export default WeatherCard