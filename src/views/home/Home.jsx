import './Home.css'
import { Carousel, Image } from 'react-bootstrap';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <main className="bg-home">

            <div className="content-carousel-1 text-center d-flex flex-column justify-content-center align-items-center">
                {/* Presentación */}
                <div className='title-container d-flex align-items-center'>
                    <h1>SportElegance</h1>
                    <Image src="../../../public/logo-sport-eg.png" className="mx-4 home-logo" rounded />
                </div>
                <h4>
                    Vive la fusión perfecta entre estilo y rendimiento en SportElegance.
                </h4>
            </div>

            <div>
                {/* Carrusel de imagenes Home */}
                <Carousel>
                    <Carousel.Item className=" custom-c-home1">
                        <Carousel.Caption>
                            <h2>Compra en hasta 6 cuotas sin interés</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="  custom-c-home2">
                        <Carousel.Caption>
                            <h2>¡Descuentos en tu primera compra!</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="custom-c-home3">
                        <Carousel.Caption>
                            <h2>Despacho gratis a partir de $50.000</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Fin de presentación */}
            <div className="content-carousel-2">
                <h1>Descubre Tu Estilo Activo</h1>
                <h4>Encuentra la ropa deportiva que refleje tu pasión por el fitness y te haga destacar con elegancia en cada entrenamiento.</h4>
                <div className='button-container'>
                    <Button as={NavLink} to="/products" className="custom-button" variant="outlined" color="inherit">
                        Explorar
                    </Button>
                </div>
            </div>

        </main>

    );
};

export default Home;