import Carousel from 'react-bootstrap/Carousel';
import tcl from '../../img/tcl.png'
import sony from '../../img/sony.png'
import whirlpool from '../../img/whirlpool.png'

function DarkVariantExample3() {
    return (
        <Carousel variant="dark" controls={false} interval={1500} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tcl}
                    alt="Whirlpool"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={whirlpool}
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