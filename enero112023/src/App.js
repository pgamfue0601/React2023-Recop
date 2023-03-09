import Card from './components/card/Card';
import './App.css';
import uuid from 'react-uuid'
import Contador from "./components/contador/Contador"
import Usuarios from './components/contador/Usuarios';

function App() {
  const nombre = "DWEC";
  const nombres = [{
    nombre:"Antonio",
    profesion: "Developer",
    genero: "masculino"
  },
  {
    nombre: "Carla",
    profesion: "Front-End",
    genero: "femenino"
  },{
    nombre: "Pablo",
    profesion: "Estudiante",
    genero: "masculino"
  },{
    nombre: "Paula",
    profesion: "Ama de Casa",
    genero: "femenino"
  },{
    nombre: "José Antonio",
    profesion: "Mecánico",
    genero: "masculino"
  },{
    nombre: "Julio",
    profesion: "Camarero",
    genero: "masculino"
  },{
    nombre: "Ana María",
    profesion: "Cocinera",
    genero: "femenino"
  }];
  const random2 = randomNumero(0,99);
  return (
    <>
    
      <div className="App">
        {/* <Card nombre={nombres[random1].nombre} profesion={nombres[random1].profesion} url={nombres[random1].genero==="masculino"
        ?"https://randomuser.me/api/portraits/men/"+random2+".jpg"
        :"https://randomuser.me/api/portraits/women/"+random2+".jpg"
      }
        /> */}
        {/* <ul>
          {nombres.map((usuarios)=>{
            return <li key={uuid()}><Card nombre={usuarios.nombre} profesion={usuarios.profesion} url={usuarios.genero==="masculino"
            ?"https://randomuser.me/api/portraits/men/"+random2+".jpg"
            :"https://randomuser.me/api/portraits/women/"+random2+".jpg"} /></li>
          })}
        </ul> */}

        {/* <Contador /> */}
        <Usuarios />
      </div>
    </>
  );
}

function randomNumero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
