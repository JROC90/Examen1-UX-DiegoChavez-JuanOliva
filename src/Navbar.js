
import './Navbar.css';

const Navbar = ({ setOpcion }) => {
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
        <label className='Navbar-links' onClick={() => setOpcion(4)}> Cambiar a padre </label>
      </div>
    </nav>
  );
}

export default Navbar;
//tengo que hacer que el set sea 1 o 0 dependiendo de si es padre o hijo