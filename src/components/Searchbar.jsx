import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleExclamation,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import s from '../scss/SearchBar.module.css'

function Searchbar({ onSearch, duplicate, exist }) {

  const [name, setName] = useState('');
  const [warnCity, setWarnCity] = useState(false)

  return (
    <div className={s.searchBar}>
      <form onSubmit={(e) => {
        let input = document.getElementById('input')
        e.preventDefault()
        if (input.value === '') {
          setWarnCity(true)
          setName(false)
        } else {
          onSearch(name)
          input.value = ''
          setWarnCity(false)
        }
      }}>
        <div className={s.searchBar__container}>
          <input
            type="text"
            placeholder='City name'
            onChange={(e) => setName(e.target.value)}
            id='input'
            className={s.searchBar__input}
          />
          <input
            type="submit"
            value="Add"
            className={s.searchBar__btn}
          />
        </div>
      </form>
      <div className={s.alerts}>
        {
          duplicate && <p className={`${s.alerts__alert} ${s.alerts__warn}`}>This city has already been added <FontAwesomeIcon icon={faTriangleExclamation} /></p>
        }
        {
          exist && <p className={`${s.alerts__alert} ${s.alerts__error}`}>This city doesn't exist <FontAwesomeIcon icon={faCircleExclamation} /></p>
        }
        {
          warnCity && <p className={`${s.alerts__alert} ${s.alerts__warn}`}>Please, insert a city <FontAwesomeIcon icon={faTriangleExclamation} /></p>
        }
      </div>
    </div>
  )
}

export default Searchbar