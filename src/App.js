// App.js
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Titulo from './titulo';
import TextoContactanos from './Contactanos';
import Home from './Home';
import UncontrolledExample from './carousel';

function App() {
  
  const [opcionSeleccionada, setOpcion] = useState(0);
  const [opcionPadres, Opcion2] = useState (0);
  return (
    <div className="App">
      <Titulo />
      <Navbar setOpcion={setOpcion} />
      {opcionSeleccionada === 1 && <UncontrolledExample></UncontrolledExample>}
      <Home opcion={opcionSeleccionada} />
      <TextoContactanos></TextoContactanos>
    </div>
  );
}

export default App;
