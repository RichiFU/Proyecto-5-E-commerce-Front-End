import CartContext from '../../../context/cart/CartContext' // Para utilizar el numero de productos en el carrito
import { useContext } from 'react'

// Estilos
import './CartIcon.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIcon = () => {

    const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext)

    const handleCartOpen = () => setIsCartOpen(!isCartOpen); // Cuando se le da click a este evento el carrito dispara el dropdown

    return (
       
            <div className="cart-container ms-4" onClick={handleCartOpen}>
                <ShoppingCartIcon className='material-icons-cart' />
                <span className='count-cart'>{cartCount}</span>
            </div>
        
        
    )
}

export default CartIcon