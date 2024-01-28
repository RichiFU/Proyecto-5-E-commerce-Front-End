import { useContext } from "react"
import CartContext from "../../../context/cart/CartContext"

// Estilo
import "./CartItem.scss"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';


const CartItem = ({ cartItem }) => {

  const { addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext)
  const { image, name, quantity, price, stock } = cartItem

  const clearHandler = () => clearItemToCart(cartItem)
  const addHandler = () => { if (quantity < stock) addItemToCart(cartItem) }
  const removeHandler = () => removeItemToCart(cartItem)

  return (

    <div className="cartItem">
      <div className="dataContainer" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>

        {/* Primera columna: Imagen */}
        <div className="image">
          <img src={image} alt={name} />
        </div>

        {/* Segunda columna: Nombre */}
        <div className="cart-name" style={{maxHeight: '70px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <p title={name}>{name}</p>
        </div>

        {/* Tercera columna: Flechas y numero */}
          <div>
            <div className="arrow" onClick={addHandler}>
              <AddIcon />
            </div>
            <span className="value1">{quantity}</span>
            <div className="arrow" onClick={removeHandler}>
              <RemoveIcon />
            </div>
          </div>
        

        {/* Cuarta columna: Remover y Precio */}
        <div>
          <div className="remove-button" onClick={clearHandler}>
            <CloseIcon />
          </div>
          <p>Total: ${quantity * price}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem