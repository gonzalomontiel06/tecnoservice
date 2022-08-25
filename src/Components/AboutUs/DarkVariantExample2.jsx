import Carousel from 'react-bootstrap/Carousel';
import samsung from '../../img/samsung.png'
import philips from '../../img/philips.png'
import lg from '../../img/lg.png'

function DarkVariantExample2() {
    return (
        <Carousel variant="dark" controls={false} fade interval={1500} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={samsung}
                    alt="Whirlpool"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={philips}
                    alt="Electrolux"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={lg}
                    alt="Ariston"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample2;