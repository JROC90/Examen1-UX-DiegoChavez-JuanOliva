
import './Navbar.css';

const Navbar = ({ setOpcion }) => {
  return (
    <nav className="Navbar">
      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(1)}> Home </label>
      </div>

      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(2)}> Sobre Nosotros </label>
      </div>

      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(3)}> Centro de ayuda </label>
      </div>

      <div className='Navbar-item'>
        <label className='Navbar-links' onClick={() => setOpcion(4)}> Centro de ayuda </label>
      </div>
    </nav>
  );
}

export default Navbar;
