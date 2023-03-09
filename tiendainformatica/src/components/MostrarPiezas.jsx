import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { borrarPieza } from '../helpers/accesoFirebase';

function MostrarPiezas({ statePieza, stateEditar }) {
	async function handleBorrar(id) {
		//borrar en cliente
		statePieza.setPieza(statePieza.pieza.filter((item) => item.id != id));

		// borrar en servidor
		await borrarPieza(id);
	}

	let renderPieza = [];
	renderPieza = statePieza.pieza.map((item) => (
		<Card key={item.id} style={{ width: '18rem' }}>
			<Card.Header>
				<Button
					onClick={() => stateEditar.setEditar(item)}
					className="bg-transparent"
				>
					✏️
				</Button>
				<Button
					onClick={() => handleBorrar(item.id)}
					className="bg-transparent"
				>
					🗑️
				</Button>
			</Card.Header>
			<Card.Body>
				<Card.Title>{item.data.nombre}</Card.Title>
				<Card.Text className="pieza-price">
					<b>Precio:</b> {item.data.precio}€
				</Card.Text>
				<Card.Text>
					<b>Marca:</b> {item.data.marca}
				</Card.Text>
				<Card.Text className="pieza-valoracion">
					<b>Valoracion:</b> {item.data.valoracion}
				</Card.Text>
			</Card.Body>
		</Card>
	));
	renderPieza.reverse();

	return <>{renderPieza}</>;
}

export default MostrarPiezas;
