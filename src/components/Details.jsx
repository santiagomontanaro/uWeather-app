import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import s from '../scss/Details.module.css'
import { createClient } from 'pexels';

function Details() {

  const { name } = useParams()


  let urlCity = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
  const [city, setCity] = useState({})
  const [videoLink, setVideoLink] = useState('')

  const client = createClient('563492ad6f91700001000001d68f67137d354030807afd34c0255f25');
  const query = `${name} ${city.sys?.country} country city`

  useEffect(() => {
    client.videos.search({ query, per_page: 10 }).then(photos => {
      photos.videos.forEach(video => {
        setVideoLink(video.video_files[0].link)
      });
    });
  }, [query])

  function getCity() {
    fetch(urlCity)
      .then((res) => res.json())
      .then((data) => {
        setCity(data)
      })
      .catch((err) => alert(err))
  }

  useEffect(() => {
    getCity()
  }, [])

  document.title = `${name} | Weather App`

  if (videoLink === '') {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className={s.container}>
        <video className={s.video} autoPlay loop muted> <source src={videoLink} type="video/mp4" /> </video>
        <div className={s.info}>
          <div className={s.info__text}>
            <p>{city.name && city.name} <span>{city.sys && city.sys.country}</span></p>
            <p>Temp: {city.main && city.main.temp}</p>
            <p>Min: {city.main && city.main.temp_min}</p>
            <p>Max: {city.main && city.main.temp_max}</p>
            <p>Weather: {city.weather && city.weather[0].description.charAt(0).toUpperCase() + city.weather[0].description.slice(1)}</p>
          </div>
          <img src={`http://openweathermap.org/img/wn/${city.weather && city.weather[0].icon}.png`} alt="icon" title={city.weather && city.weather[0].main} />
        </div>
        <Link to='/'>
          <FontAwesomeIcon icon={faLeftLong} className={s.back} />
        </Link>
      </div>
    )
  }

}

export default Details