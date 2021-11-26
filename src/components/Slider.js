import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
    return (
        <Carousel fade>
          {start.map((item) =>(
                <Carousel.Item>
                <img 
                className='d-bloack w-100'
                src={item}
                alt=''
                />
          </Carousel.Item>
          /* <Carousel.Caption>
              <h3>First Slide labled</h3>
              <p>lorem10 added 26 packages, and audited 1990 package</p>
          </Carousel.Caption> */
          ))}
        </Carousel>
    )
}

export default Slider
