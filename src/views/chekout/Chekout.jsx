import './Chekout.scss'
import { useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import CheckoutItem from '../../components/checkComponents/ChekoutItem';
import Paypal from "../../components/paypalComponents/Paypal";


const Checkout = () => {

    const { cartItems, cartTotal, cartCount } = useContext(CartContext)
    console.log(cartItems)


    return (
        <section className='background-checkout'>

            {/* Titulo */}
            <div className='container'>
                <div className="my-5 container-title4 capitalize">
                    <span><b>Carro de compra</b></span>
                    <span className='ml-4'>|</span>
                    <span className='ml-4'> {cartCount}  Producto{cartCount !== 1 && 's'}</span>
                </div>
            </div>

            {/* Encabezado de tabla checkout */}
            <div className='checkout-container container my-5' >
                <table>
                    <thead>
                        <tr>
                            <th>Remover</th>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    {cartItems.length === 0 ? (
                        <tr>
                            <td colSpan="5" className='text-center'>
                                <h5 className='mt-5 pt-5'>Carro Vacío</h5>
                            </td>
                        </tr>
                    ) : (
                        <>
                            {cartItems.map((cartItem) => (
                                <CheckoutItem key={cartItem._id} cartItem={cartItem} stock={cartItem.stock} />
                            ))}
                        </>
                    )}
                </table>
            </div>

            <div className='checkout-bottom mt-5 container mb-5 pb-5'>
                <div className='row'>
                    {/* Publicidad */}
                    <div className='coupon col-lg-6 cold-md-6 col12 mb-4'>
                        <div className='border-coupon'>
                            <h5>Descuentos</h5>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='parrafo-checkout'>Todos los jueves 15% de descuento con tarjetas Banco Estado</p>
                                <img className='bco-estado-img' src="../../../public/tarjetas.jpeg" alt="" />
                            </div>

                        </div>
                    </div>
                    {/* Total */}
                    <div className='total col-lg-6 cold-md-6 col12'>
                        <div className='border-total'>
                            <h5>Total del carrito</h5>
                            <div className='d-flex justify-content-between checkout-cartotal'>
                                <h6>Total:</h6>
                                <p className='parrafo-checkout'>$ {cartTotal}</p>
                            </div>
                            {cartItems.length > 0 && (
                <div className='mt-1 mb-4 d-flex justify-content-between border-total'>
                    <h4 className='comprar2'>Envío:</h4>
                    {/* Contenido del div de envío */}
                    <p className='comprar3'>Temuco, Region de la Araucania, Calle e-Commerce #123</p>
                </div>
            )}
                            <div className='d-flex justify-content-between mt-3'>
                                <h4 className='comprar'>Comprar:</h4>
                            </div>
                            {/* Boton de pago Paypal */}
                            <div className='paypal-container'>
                                {cartItems.length ? <Paypal /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;