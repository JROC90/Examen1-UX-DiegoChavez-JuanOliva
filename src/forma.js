import './forma.css';

const Forma = () => {
  const handleClick = () => {
    const inputCorreo = document.getElementById('inputCorreo').value;
    if (inputCorreo === '') {
      alert('Por favor, ingrese su correo electrónico');
    } else {
      alert(`Te estaremos enviando nuestra información en breve a ${inputCorreo}`);
    }
  };

  return (
    <div className='forma-box'>
      <div className='forma2'>
        <label>Correo electronico:&nbsp;&nbsp;&nbsp;</label>
        <input id="inputCorreo" type='text'></input>
      </div>
      <div className='forma3'>
        <button className='subscribe-button' onClick={handleClick}>
          SUBSCRIBASE
        </button>
      </div>
    </div>
  );
}

export default Forma;
