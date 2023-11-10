import './Navbar.css';
const Navbar = () => {
    return ( 
       <nav className="Navbar" >
        <div className='Navbar-item'>
            <a href="/" className='Navbar-links'> Home </a>
        </div>

        <div className='Navbar-item'>
            <a href="/sobrenosotros" className='Navbar-links' > Sobre Nosotros  </a>
            </div>
        <div className='Navbar-item'>
            <a href="/centrodeayuda" className='Navbar-links' > Centro de ayuda  </a>
            </div>
        
       </nav>
     );
}
 
export default Navbar;
