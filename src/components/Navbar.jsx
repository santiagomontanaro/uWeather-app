import React from 'react'
import Searchbar from './Searchbar'
import s from '../scss/Navbar.module.css'

function Navbar({ onSearch, duplicate, exist }) {
  return (
    <div>
      <nav className={s.nav}>
        <div className={s.logo}>
          <h1 className={s.title}></h1>
        </div>
        <Searchbar onSearch={onSearch} duplicate={duplicate} exist={exist} />
      </nav>
    </div>
  )
}

export default Navbar