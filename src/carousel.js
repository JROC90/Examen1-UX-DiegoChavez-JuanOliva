import Carousel from 'react-bootstrap/Carousel';
import './Contactanos.css';

function UncontrolledExample() {
  return (
    
    <Carousel className='Carousel'>

<Carousel.Item>
<img src='\images\img1.webp' className='images2' alt='Not Found'></img>
        <Carousel.Caption>
          <h3></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='\images\img2.jpg' className='images2' alt='Not Found'></img>
        <Carousel.Caption>
          <h3></h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='\images\img3.png' className='images2' alt='Not Found'></img>
        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      
     
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;