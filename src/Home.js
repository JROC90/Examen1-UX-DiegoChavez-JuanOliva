import React from 'react';
import { infoEstudiantes } from './InformacionEstudiantes';

const Home = () => {
  return (
    <div>
      {/* Use the infoEstudiantes array in your component */}
      {infoEstudiantes.map((info, index) => (
        <div key={index}>
          <h2>{info.titulo}</h2>
          <p className='texto'>{info.contenido}</p>
          <img src={info.imagen} alt={`Imagen ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Home;