import React from 'react'
import './card.css'


function Card({nombre, profesion, url}) {
  return (
    <div className='container justify-content-center'>
        <div className='card'>
        <img src={url} className="card-img-top rounded-circle blurry" alt='...'/>
        <div className="card-body">
            <h2 className="card-title">{nombre}</h2>
            <h3 className="card-text">{profesion}</h3>
        </div>
        <button type='button' className='btn btn-primary' onClick={Difuminar}>Difuminar</button>
    </div>
    </div>
    
  )
}

function Difuminar(e){
    e.preventDefault();
    const $foto = e.target.parentElement.querySelector("img");
    $foto.style.setProperty("filter","blur(3px)")
}

export default Card