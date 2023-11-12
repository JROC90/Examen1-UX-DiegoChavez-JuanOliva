import './forma.css';
const Forma = () => {
  return (
    <div className='forma-box' >
      <div className='forma2'>
        <label> Correo electronico:&nbsp;&nbsp;&nbsp; </label>
        <input id="inputCorreo" type='text'></input>
      </div>
      <div className='forma3'>
        <button className='subscribe-button' onClick={() => alert("Te estaremos enviando nuestra informacion en breve" )}>
          SUBSCRIBASE
        </button>
      </div>
    </div>
  );
}
export default Forma;