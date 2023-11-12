// Home.js
import React, { useState, useEffect } from 'react';
import { infoEstudiantes } from './InformacionEstudiantes';
import { infoPadres } from './InformacionPadres';
import './Home.css';

const Home = ({ opcion, esEstudiante }) => {
  const [infoToShow, setInfoToShow] = useState([]);

  useEffect(() => {
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
          <br></br>
          <div className="titulo_blog">
            <h2 className='titulo'>{info.titulo}</h2>
          </div>

          <div className='texto_blog'>  
            <p className='texto'>{info.contenido}</p> 
          </div>
        
          <img src={info.imagen} alt={`Imagen ${index}`} />
          <br></br>
          <br></br>
        </div>
      ))}
      {/* Use the infoEstudiantes array in your component */}
      {!esEstudiante && infoPadres.map((info, index) => (
        <div id="blogs" key={index}>
          <br></br>
          <div className="titulo_blog">
            <h2 className='titulo'>{info.titulo}</h2>
          </div>

          <div className='texto_blog'>  
            <p className='texto'>{info.contenido}</p> 
          </div>
        
          <img src={info.imagen} alt={`Imagen ${index}`} />
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Home;