import CartContext from '../../../context/cart/cartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

// Estilos
import { Button } from "@mui/material";
import CartItem from '../cartItem/CartItem';
import CancelIcon from '@mui/icons-material/Cancel';
import './CartDropdown.scss'

const CartDropdown = () => {

    const navigate = useNavigate()
    const { cartItems, isCartOpen, setIsCartOpen, cartTotal, cartCount } = useContext(CartContext)

    // Define la funcion handleCartOpen que cambiará el estado de isCartOpen a su valor opuesto cuando se llame
    const handleCartOpen = () => setIsCartOpen(!isCartOpen);

    const goToCheckout = () => {
        navigate("/checkout")
    }


    return (
        <>
            <div className="cart-dropdown-container">

                <div className="cart-items">
                    <div className='close-cart' onClick={handleCartOpen} >
                        <h6 className='ml-3'> Carro | {cartCount} Producto{cartCount !== 1 && 's'}</h6>
                        <CancelIcon style={{ fontSize: '28px', cursor: 'pointer' }} />
                    </div>

                    {/* Renderiza los elementos del carrito si hay elementos; de lo contrario, muestra un mensaje "Carro Vacio" */}
                    {cartItems.length != 0 ? (cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))
                    ) :
                        <span className="empty-message">Carro Vacío</span>
                    }
                </div>
                <div className="cart-total">
                    <h6>Total: ${cartTotal}</h6>
                </div>

                {/* Botón que llama a la funcion goToCheckout para redirigir a la pagina de pago */}
                <Button onClick={goToCheckout}>Ir al Carro</Button>

            </div>

        </>
    )
}

export default CartDropdown