/*
Consegna:
Implementare un sistema di filtro per una lista di film in base al genere.
Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
*/

import { useState, useEffect } from 'react'
import movies from '../data/movies'

function App() {
  const genresList = movies.map(movie => movie.genre).filter((value, index, self) => self.indexOf(value) === index);

  return (
    <>
      <div className="container mt-3">
        <h1 className='text-center'>
          Pick your movie!
        </h1>
        <select className="form-select mt-3" aria-label="Movies">
          <option selected>
            Select the movie's genre
          </option>
          {
            genresList.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))
          }
        </select>
      </div>
    </>
  )
}

export default App
