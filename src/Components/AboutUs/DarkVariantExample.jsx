import Carousel from 'react-bootstrap/Carousel';
import whirlpool from '../../img/whirlpool.png'
import electrolux from '../../img/electrolux.png'
import ariston from '../../img/ariston.png'

function DarkVariantExample() {
    return (
        <Carousel variant="dark" controls={false} fade interval={1500} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={whirlpool}
                    alt="Whirlpool"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={electrolux}
                    alt="Electrolux"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ariston}
                    alt="Ariston"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;