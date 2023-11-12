import React, { useState, useEffect } from 'react';
import { infoEstudiantes } from './InformacionEstudiantes';
import { infoPadres } from './InformacionPadres';
import './Home.css'
const Home = ({opcion, esEstudiante}) => {
  const [infoToShow, setInfoToShow] = useState([]);

  useEffect (() => {
    // Update infoToShow based on the selected option
    if (opcion === 0) {
      setInfoToShow(infoEstudiantes.slice(0, 1)); // Display only the first element
    }
    // Add more conditions for other options if needed

  }, [opcion]);
  return (
    <div>
      {/* Use the infoEstudiantes array in your component */}
      {esEstudiante && infoEstudiantes.map((info, index) => (
        <div id="blogs" key={index}>
          <h2  style={{ textAlign: 'center' }} className='titulo'>{info.titulo}</h2>
          <p className='texto'>{info.contenido}</p>
          <img src={info.imagen} alt={`Imagen ${index}`} />
        </div>
      ))}
        {/* Use the infoEstudiantes array in your component */}
        {!esEstudiante && infoPadres.map((info, index) => (
        <div key={index}>
          <h2 className='titulo'>{info.titulo}</h2>
          <p className='texto'>{info.contenido}</p>
          <img src={info.imagen} alt={`Imagen ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Home;