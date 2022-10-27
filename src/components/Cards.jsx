import React from 'react'
import Card from './Card'
import s from '../scss/Cards.module.css'

function Cards({ cities, onClose }) {
  return (
    <div className={s.main}>
      {
        cities.map(c => <Card
          key={c.id}
          id={c.id}
          name={c.name}
          img={c.img}
          temp={c.temp}
          main={c.main}
          description={c.description}
          onClose={() => onClose(c.id)}
        />)
      }
    </div>
  )
}

export default Cards
