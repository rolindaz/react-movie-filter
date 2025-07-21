/*
Consegna:
Implementare un sistema di filtro per una lista di film in base al genere.
Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
*/

import { useState, useEffect } from 'react'
import movies from '../data/movies'

function App() {
  const genresList = movies.map(movie => movie.genre).filter((genre, index, self) => self.indexOf(genre) === index);

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
            genresList.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))
          }
        </select>
        <ul className="list-group mt-4">
          {
            movies.map((movie) => {
              return (
                <li key={movie.id} className="list-group-item">
                  {movie.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App