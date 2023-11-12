import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Titulo from './titulo';
import TextoContactanos from './Contactanos';
import Home from './Home';
import UncontrolledExample from './carousel';
import Forma from './forma';
import CentroAyuda from './CentroAyuda';

function App() {
  
  const [opcionSeleccionada, setOpcion] = useState(0);
  const [esEstudiante, setEsEstudiante] = useState(true);

  return (
    <div className="App">
      <Titulo />
      <Navbar setOpcion={setOpcion} esEstudiante={esEstudiante} setEsEstudiante={setEsEstudiante}/>
        {opcionSeleccionada === 0 && <Home opcion={opcionSeleccionada} esEstudiante={esEstudiante}/>}
        {opcionSeleccionada === 2 && <CentroAyuda esEstudiante={esEstudiante}/>}
        {opcionSeleccionada === 1 && <UncontrolledExample esEstudiante={esEstudiante}></UncontrolledExample>}
        {opcionSeleccionada === 3 && <Forma></Forma>}
      <footer>
        <TextoContactanos></TextoContactanos>
      </footer>
    </div>
  );
}

export default App;