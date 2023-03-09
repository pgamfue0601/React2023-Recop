import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom';
import getJSON from '../helpers/getJSON'

const initialStateHoras = [];

const HoraPrecio = () => {
    const [horas, setHoras] = useState(initialStateHoras);
    // useEffect(() => {
    //   traerHoras();
    // }, [])
    
    const arrayHecho = [useLoaderData()];
    console.log(arrayHecho);

  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default HoraPrecio