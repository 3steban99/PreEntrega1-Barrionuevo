import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ventaMayor from './ventaMayor.png'
import info from './info.png'


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 imgCarousel img-fluid"
                    src={ventaMayor} 
                    alt="venta mayor"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imgCarousel img-fluid"
                    src={info}
                    alt="info venta mayor"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel