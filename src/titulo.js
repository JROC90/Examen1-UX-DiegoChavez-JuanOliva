import './Titulo.css';
const Titulo= () => {
    return ( 
      <div className='titulo'>
        <div className='titulo-items'>
            <img src="\images\Imagentitulo.jpg" alt="Imagen no encontrada" />
        </div>
        <div className='titulo-items'>
            <h1 style={{marginTop :'6vh', fontWeight: 'bold'}}>
               All about UX
            </h1>
        </div>
      </div>
     );
}
export default Titulo;