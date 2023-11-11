import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src='\images\Imagentitulo.jpg' alt='Not Found'></img>
      
      </Carousel.Item>
      <Carousel.Item>
      <img src='\images\Imagentitulo.jpg' alt='Not Found'></img>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src='\images\Imagentitulo.jpg' alt='Not Found'></img>
     
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;