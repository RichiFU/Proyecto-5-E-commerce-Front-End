import { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

// Estilo
import "./ChekoutItem.scss"

const CheckoutItem = ({ cartItem, stock }) => {

    const { addItemToCart, removeItemToCart, clearItemToCart, cartCount } = useContext(CartContext)

    console.log(cartCount)
    console.log(cartItem)

    const clearHandler = () => clearItemToCart(cartItem)
    const addHandler = () => { if (quantity < stock) addItemToCart(cartItem) }
    const removeHandler = () => removeItemToCart(cartItem)

    const { name, price, image, quantity } = cartItem

    return (
        <>
        {/* Item de tabla Checkout */}
        <tbody className='tbody-checkout'>
            <tr>
                <td onClick={clearHandler}><span className='remove-checkout'> &#10005;</span></td>
                <td><img className='checkout-image' src={image} alt={`${name}`} /></td>
                <td className='checkout-name'>{name}</td>
                <td><span className='span-checkout' onClick={removeHandler}> &#10094;</span> {quantity} <span className='span-checkout' onClick={addHandler}> &#10095;</span></td>
                <td>$ {quantity * price}</td>
            </tr>
        </tbody>
        </>
        
    )
}

export default CheckoutItem;