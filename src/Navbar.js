import React from 'react';
import './Navbar.css';

const Navbar = ({ setOpcion, esEstudiante, setEsEstudiante }) => {

  const audiencia = () => { 
    // setOpcion(4);
    setEsEstudiante(!esEstudiante);
  };

  return (
    <nav className="Navbar">
      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(0)}> Home </label>
      </div>

      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(1)}> Sobre Nosotros </label>
      </div>

      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(2)}> Centro de ayuda </label>
      </div>

      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(3)}> Registrate!!! </label>
      </div>

      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={audiencia}> {esEstudiante?"Ver como: Padre":"Ver como: Estudiante"} </label>
      </div>
    </nav>
  );
}

export default Navbar;