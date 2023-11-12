import React from 'react';
import { preguntas } from './Preguntas';

const CentroAyuda = ({ esEstudiante }) => {
  const preguntasToShow = esEstudiante ? preguntas[1] : preguntas[0];

  return (
    <div>
      {Object.keys(preguntasToShow).map((key) => {
        const pregunta = preguntasToShow[key];
        return (
          <div key={key}>
            <h3>{pregunta.pregunta}</h3>
            <p>{pregunta.respuesta}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CentroAyuda;