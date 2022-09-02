import Carousel from 'react-bootstrap/Carousel'
import electrolux from '../../img/electrolux.png'
import ariston from '../../img/ariston.png'
import lg from '../../img/lg.png'

function DarkVariantExample() {
    return (
        <Carousel variant="dark" controls={false} interval={1500} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={lg}
                    alt="lg"
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