import React from 'react'

function Cardejemplo(props) {
    //Para hacer destructuring en la funcion, se cambia props por lo que hayamos puesto en App.js en este caso == ( {nombre} )
  return (
    <div>
        {/* Siguiendo el destructing, aqui solo haría falta poner nombre */}
        Estoy en card y me llamo {props.nombre}
    </div>
  )
}

export default Cardejemplo;
