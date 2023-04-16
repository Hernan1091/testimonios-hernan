import './App.css';
import Testimonio from './componentes/Testimonio.jsx'

import personas from './base-de-datos/desarrolladores-testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de nosotros.</h1>
        <Testimonio 
        nombre = {personas[0].nombre}
        pais= {personas[0].pais}
        imagen={personas[0].imagen}
        cargo={personas[0].cargo}
        empresa={personas[0].empresa}
        testimonio1={personas[0].testimonio1}
        testimonior = {personas[0].testimonior}
        testimonio2 = {personas[0].testimonio2} />

        <Testimonio 
        nombre = {personas[1].nombre}
        pais= {personas[1].pais}
        imagen={personas[1].imagen}
        cargo={personas[1].cargo}
        empresa={personas[1].empresa}
        testimonio1={personas[1].testimonio1}
        testimonior = {personas[1].testimonior}
        testimonio2 = {personas[1].testimonio2} />

        <Testimonio 
        nombre = {personas[2].nombre}
        pais= {personas[2].pais}
        imagen={personas[2].imagen}
        cargo={personas[2].cargo}
        empresa={personas[2].empresa}
        testimonio1={personas[2].testimonio1}
        testimonior = {personas[2].testimonior}
        testimonio2 = {personas[2].testimonio2} />
      </div>
    </div>
  );
}

export default App;
