import './Home.css'
import { Carousel, Image } from 'react-bootstrap';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="bg-home">

            <div className="content-carousel-1 text-center d-flex flex-column justify-content-center align-items-center">
                {/* Presentación */}
                <div className='title-container d-flex align-items-center'>
                    <h1>Marathon</h1>
                    <Image src="../../../logo-sport-eg.png" className="mx-4 home-logo" rounded />
                </div>
                <h4>
                    Vive la fusión perfecta entre deporte, estilo y rendimiento en Marathon.
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
                    <Button as={NavLink} to="/products" onClick={scrollToTop} className="custom-button" variant="outlined" color="inherit">
                        Explorar
                    </Button>
                </div>
            </div>
            <section className='container'>
                <div className="row mb-5 pb-3">
                    {/* Columna 1 */}
                    <div className="col-lg-6 cold-md-6 col12 mt-3">
                        <h2>Conócenos</h2>

                        {/* Párrafo con la ubicación */}
                        <p className='text-gray-500 text-lg'>Descubre cómo comenzamos para brindarte la mejor ropa deportiva.</p>

                        <div className="image-container-product">
                            {/* Puedes poner aquí tu imagen */}
                            <div className="overlay1">
                                <img
                                    src="../../../deportesherramientas.jpg"
                                    alt="Deportes"
                                    className="img-fluid"
                                    
                                />
                            </div>

                            {/* Botón centrado sobre la imagen */}
                            <Button as={NavLink} to="/about" onClick={scrollToTop} className="custom-button5" variant="outlined" color="inherit">
                                Saber mas
                            </Button>
                        </div>
                    </div>

                    {/* Columna 2 */}
                    <div className="col-lg-6 cold-md-6 col12 mt-3">
                        {/* Título */}
                        <h2>Locación</h2>

                        {/* Párrafo con la ubicación */}
                        <p className='text-gray-500 text-lg'>#001, Calle E-Commerce, Temuco</p>

                        {/* Mapa de Google */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.3135449061137!2d-72.61324198768688!3d-38.73356658704824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96623f0f6ecffc81%3A0xa0819486bef36f8d!2sPortal%20Temuco!5e0!3m2!1ses!2scl!4v1706542859372!5m2!1ses!2scl"
                                width="99%"
                                height="405"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    );
};

export default Home;