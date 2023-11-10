// App.js
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Titulo from './titulo';
import TextoContactanos from './Contactanos';
import Home from './Home';


function App() {
  const [opcionSeleccionada, setOpcion] = useState(0);

  return (
    <div className="App">
      <Titulo />
      <Navbar setOpcion={setOpcion} />
      {opcionSeleccionada === 1 && <h2>Apretaste 1</h2>}
      <TextoContactanos></TextoContactanos>
      <Home> Hola Mundo</Home>
    </div>
  );
}

export default App;
