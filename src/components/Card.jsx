import React from 'react'
import style from '../scss/Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Card({ onClose, name, img, temp, id, main }) {
  return (
    <>
      <div className={style.card}>
        <FontAwesomeIcon icon={faX} className={style.card__close_btn} onClick={onClose} />
        <Link to={`/city/${name}%20id=${id}`} className={style.link}>
          <div className={style.card__location}>
            <span title={name}>{name}<FontAwesomeIcon icon={faLocationDot} size={'lg'} /></span>
          </div>
          <div className={style.card__info}>
            <div className={style.desc}>
              <p>{temp}°C</p>
            </div>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="temperature icon image not found" title={main} />
          </div>
          <span className={style.infoTemp}>{main}</span>
        </Link>
      </div>
    </>
  )
}

export default Card