import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import getMovieDB from '../../helpers/getMovieDB';

// stateInitial
const initialStatePelis = [];
const PeliculasAPI = ({setIdPeli}) => {
  // Estados
  const [peliculas, setPeliculas] = useState(initialStatePelis);
  // Efectos
  useEffect(() => {
    traerPeliculas();
  }, [])
  
  // Lógica funcional
  const traerPeliculas = () =>{
    getMovieDB()
      .then((pelis) => setPeliculas(pelis))
      .catch((error)=> console.error(error));
  }

  const handleSelect = (e) =>{
    setIdPeli(e.target.value);
    console.log(e.target.value)
  }
  return (
    <div className='container'>
      <Form.Select onChange={(e)=>handleSelect(e)} aria-label="Default select example">
        <option>Selecciona una pelicula</option>
        {peliculas.map(peli=>(
            <option value={peli.id} key={peli.id}>{peli.title}</option>
          )
        )}
      </Form.Select>
    </div>
  )
}

export default PeliculasAPI