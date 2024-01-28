import { Image, Container, Row, Col } from "react-bootstrap";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./about.css"



const About = () => {
    return (
        // Sobre Nosotros
        <section>
            <div className="custom-background">
                <Container className="mx-auto" style={{ maxWidth: "1400px" }}>
                    <div className=' custom-about-title  d-flex align-items-center justify-content-center'>
                        <h1>Marathon</h1>
                        <Image src="../../../src/assets/logo-sport-eg.png" className="mx-4 home-logo" rounded />
                    </div>

                    <Row className="mt-5 justify-content-around">
                        {/* Imagen del Restaurant */}
                        <Col lg={6}>
                            <Image src="../../../src/assets/ropadeportiva.jpg" alt="ropa deportiva" fluid className="mb-4 mt-4" />
                        </Col>
                        {/* Descripción del Restaurant */}
                        <Col lg={5}>
                            <div className="about-us-text mt-4">
                                <div className="text-center">
                                    <h2>Sobre Nosotros</h2>
                                </div>
                                <div className="mt-4 custom-description-about">
                                    <p>
                                        ¡Bienvenidos a Marathon, ubicados en pleno corazón de Temuco, #001, Calle Endurance, donde la pasión por los deportes,
                                        la moda y la comunidad se entrelazan! Desde que abrimos nuestras puertas en Enero del 2024,
                                        nos hemos dedicado a ofrecer a nuestros clientes una experiencia única que fusiona la moda deportiva con el espíritu de comunidad.
                                    </p>
                                    <p>
                                        Con raíces profundas en la cultura deportiva, nuestro establecimiento fue fundado por apasionados del deporte
                                        que buscan brindar una amplia gama de artículos deportivos y moda actual. Cada visita es una invitación a sumergirte
                                        en el mundo del deporte y una oportunidad para compartir esa energía con familiares y amigos.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="custom-horario-about">
                        {/* Horario Del Restaurant */}
                        <div className="custom-about-title">
                            <h2 className="text-center" >Horario <AccessTimeIcon sx={{ fontSize: "40px", color: '#155e75' }} /> </h2>
                        </div>

                        <div className="text-center mt-5">
                            <p>
                                Los días 25 de Diciembre y del 1 al 6 de Enero, permaneceremos cerrados.
                            </p>
                            <p>
                                Lunes a Viernes : de 10.00 a 18.00 h
                            </p>
                            <p>
                                Sábados, Domingos y Festivos : de 11.00 a 19.30 horas
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default About