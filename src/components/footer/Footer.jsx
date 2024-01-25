// Estilo
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        
            <footer className=" text-white pt-5 pb-4 custom-footer">

                <div className="container text-center">

                    <div className="row text-center ">

                        {/* Seccion Links */}
                        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercasse mb-4 font-weight-bold text-slate-200">Links</h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled text-md-start">
                                <li className="mb-3">
                                    <a href="#" className="links-footer text-light" >Inicio</a>
                                </li>
                                <li className="mb-3">
                                    <a href="#" className="links-footer text-light">Sobre Nosotros</a>
                                </li >
                                <li className="mb-3">
                                    <a href="#" className="links-footer text-light">Contacto</a>
                                </li>
                                <li className="mb-3">
                                    <NavLink to="/terms" className="links-footer text-light" onClick={scrollToTop}>
                                        Terminos y Condiciones
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Seccion Contactanos */}
                        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercasse mb-4 font-weight-bold text-slate-200">Contáctanos</h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled text-md-start">
                                <li className="mb-3">
                                    <p><i className="fas fa-map-marker-alt me-2"></i> #001, Calle E-Commerce, Temuco</p>
                                </li>
                                <li className="mb-3">
                                    <p><i className="fas fa-envelope me-2"></i> Micorreo@marathon.cl</p>
                                </li>
                                <li className="mb-3">
                                    <p><i className="fas fa-phone me-2"></i> 100 200 3000</p>
                                </li>
                                <li className="mb-3">
                                    <p><i className="fab fa-whatsapp me-2" ></i> +56 11223344 </p>
                                </li >
                            </ul>
                        </div>

                        {/* Seccion Redes Sociales */}
                        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercasse mb-4 font-weight-bold text-slate-200">Síguenos</h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a href="#" className="text-light text-decoration-none" ><FacebookIcon className="social-icons-a" size={"25"} color="#fff" /></a>
                                </li>
                                <li className="mb-3">
                                    <a href="#" className="text-light"><TwitterIcon className="social-icons-a" size={"25"} color="#fff" /></a>
                                </li>
                                <li className="mb-3">
                                    <a href="#" className="text-light"><InstagramIcon className="social-icons-a" size={"25"} color="#fff" /></a>
                                </li >
                                <li className="mb-3">
                                    <a href="#" className="text-light"><YouTubeIcon className="social-icons-a" size={"25px"} color="#fff" /></a>
                                </li>
                            </ul>
                        </div>

                        <hr className="mb-4 mt-4" />

                        {/* Derechos de autor */}
                        <div className="text-center mb-1 mt-2">
                            <p>
                                &copy; 2024 Marathon: Todos los Derechos Reservados.
                            </p>
                        </div>

                    </div>
                </div>
                
            </footer>
      
    )
}

export default Footer