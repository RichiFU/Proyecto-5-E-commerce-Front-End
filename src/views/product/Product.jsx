import ProductContext from "../../context/products/ProductContex";
import CartContext from "../../context/cart/cartContext";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Estilo
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from "react-bootstrap";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './product.css'

const Product = () => {

    const { id } = useParams();

    const { getProductById, product } = useContext(ProductContext);
    const { addItemToCart, cartCount } = useContext(CartContext)

    const handleAdd = () => { if (cartCount < stock) addItemToCart(product[0]) }

    const { name, stock, price, image, sku, detail } = product[0];

    console.log(detail);


    useEffect(() => {
        const fetchProduct = async () => {
            await getProductById(id);
        };
        fetchProduct();
    }, []);


    return (

        <section className="container">

            <div className='checkout-bottom mt-5 container mb-5'>
                <nav aria-label="Breadcrumb">
                    <ol
                        role="list"
                        className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
                    >
                        <li>
                            <div className="flex items-center">
                                <Link
                                    to="/products"
                                    className="mr-2 text-sm font-medium text-gray-900"
                                >
                                    Catálogo
                                </Link>
                                <svg
                                    width="16"
                                    height="20"
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-4 h-5 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>

                        <li className="text-sm">
                            <a
                                href="#"
                                aria-current="page"
                                className="font-medium text-gray-500 hover:text-gray-600"
                            >
                                {name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <div className="container-title3 capitalize">{name}</div>
                <div className='row'>

                    {/* Imagen */}
                    <div className='coupon col-lg-6 cold-md-6 col12 mb-4'>
                        <div className="container-img">
                            <img
                                src={image}
                                alt="imagen-producto"
                            />
                        </div>
                    </div>

                    {/* Caracteristicas */}
                    <div className='total col-lg-6 cold-md-6 col12'>
                        <div>
                            <div className="product-carac">
                                <h2 className="text-3xl text-gray-400">
                                    Características
                                </h2>
                            </div>
                            <div className="mt-4 product-carac mb-4">
                                <p className="text-base text-gray-900">
                                    <b>SKU</b>: {sku}
                                </p>

                                <p className="text-base text-gray-900 ">
                                    <b>Precio</b>: ${price} clp
                                </p>
                                <p className="text-base text-gray-900 mb-4">
                                    <b>Stock</b>: {stock}
                                </p>
                            </div>
                        </div>

                        {/* Boton */}
                        <div className="container-add-cart">
                            {stock === 0 ? (
                                <h4 className="text-red-800 no-underline">Sin Stock</h4>
                            ) : (
                                <Button onClick={handleAdd} className="custom-button2" variant="outlined"  >
                                    Agregar al Carrito
                                </Button>
                            )}
                        </div>

                        {/* Detalles */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography>Descripción</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <div className="container-social">
                            <span>Compartir</span>
                            <div className="container-buttons-social">
                                <a href="#"><i className="fa-solid fa-envelope"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Product;