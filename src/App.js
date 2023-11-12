import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Titulo from './titulo';
import TextoContactanos from './Contactanos';
import Home from './Home';
import UncontrolledExample from './carousel';
import Forma from './forma';

function App() {
  
  const [opcionSeleccionada, setOpcion] = useState(0);
  const [esEstudiante, setEsEstudiante] = useState(true);

  return (
    <div className="App">
      <Titulo />
      <Navbar setOpcion={setOpcion} esEstudiante={esEstudiante} setEsEstudiante={setEsEstudiante}/>
      {opcionSeleccionada === 1 && <UncontrolledExample></UncontrolledExample>}
      <Home opcion={opcionSeleccionada} esEstudiante={esEstudiante}/>
      {opcionSeleccionada === 3 && <Forma></Forma>}
      <TextoContactanos></TextoContactanos>

     
    </div>
  );
}

export default App;