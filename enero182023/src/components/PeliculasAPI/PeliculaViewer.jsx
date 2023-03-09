import React, { useEffect, useState } from 'react';
import getInfoPelicula from '../../helpers/getInfoPelicula';
import { Card } from 'react-bootstrap';

// Variables globales
const initialStatePeli = {};

const PeliculaViewer = ({idPeli}) => {
    // Estados
    const [pelicula, setPelicula] = useState(initialStatePeli);
    // Efectos
    useEffect(() => {
      traerUnaPeli();
    }, [idPeli])
    
    // Lógica funcional
    const traerUnaPeli = () =>{
        getInfoPelicula(idPeli)
        .then((peli)=>(setPelicula(peli)))
        .catch((error)=>(console.error(error)))
    }
  return (
    <div>
        <Card style={{ width: '25rem' }}>
            <Card.Img className='mx-auto mt-3' style={{width: "60%"}} variant="top" src={`https://image.tmdb.org/t/p/original/`+pelicula.poster_path}/>
            <Card.Body>
                <Card.Title>{pelicula.title}</Card.Title>
                <Card.Text>{pelicula.overview}</Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default PeliculaViewer