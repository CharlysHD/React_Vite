import Carousel from 'react-bootstrap/Carousel';


const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
            <img 
            className='d-block w-100' 
            style={{maxHeight: "500px", objectFit:'cover'}}
            src="src/assets/images/slide1.jpeg" alt="slide1" />
        <Carousel.Caption>
          <h3>Las Locas Aventuras de Mike Wuasaski</h3>
          <p>Here is the incredible phrase 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img 
            className='d-block w-100' 
            style={{maxHeight: "500px", objectFit:'cover'}}
            src="src/assets/images/slide2.jpeg" alt="slide2" />
        <Carousel.Caption>
          <h3>Las Locas Aventuras de Batman XD</h3>
          <p>Here is the incredible phrase 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img 
            className='d-block w-100' 
            style={{maxHeight: "500px", objectFit:'cover'}}
            src="src/assets/images/slide3.jpeg" alt="slide3" />
        <Carousel.Caption>
          <h3>"Las Locas Aventuras de Footer"</h3>
          <p>
          Here is the incredible phrase 3.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default CarouselHome