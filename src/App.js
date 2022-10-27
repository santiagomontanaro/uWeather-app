import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Details from './components/Details';
import {
  Routes,
  Route,
} from 'react-router-dom'

function App() {

  const [duplicate, setDuplicate] = useState(false);
  const [exist, setExist] = useState(false);
  const [cities, setCities] = useState([])
  function search(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          const infoCity = {
            id: data.id,
            name: data.name,
            img: data.weather[0].icon,
            temp: data.main.temp,
            main: data.weather[0].main,
            description: data.weather[0].description,
          }
          setCities(prev => {
            //if the city is already in the array, it will not be added again
            if (prev.find(c => c.id === infoCity.id)) {
              setDuplicate(true)
              return prev
            } else {
              setDuplicate(false)
              return [...prev, infoCity]
            }
          })
          setExist(false)
        }
      })
      .catch(err => {
        setExist(true)
        console.log(err)
      })
  }
  function onClose(id) {
    setCities(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="App">
      <Navbar onSearch={search} duplicate={duplicate} exist={exist} />
      <Routes>
        <Route exact path="/" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path="/city/:name%20id=:id" element={<Details cities={cities} />} />
      </Routes>
    </div>
  );
}

export default App;