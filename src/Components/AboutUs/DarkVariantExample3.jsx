import Carousel from 'react-bootstrap/Carousel';
import apple from '../../img/apple.png'
import tcl from '../../img/tcl.png'
import sony from '../../img/sony.png'

function DarkVariantExample3() {
    return (
        <Carousel variant="dark" controls={false} fade interval={1500} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={apple}
                    alt="Whirlpool"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tcl}
                    alt="Electrolux"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sony}
                    alt="Ariston"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample3;