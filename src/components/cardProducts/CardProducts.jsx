import { Link } from "react-router-dom"
import CartContext from "../../context/cart/cartContext"
import { useContext } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './cardProducts.scss'

const CardProducts = ({ product }) => {


  const { addItemToCart, cartCount } = useContext(CartContext)
  console.log(addItemToCart, cartCount)
  //explicar

  const { name, price, _id, image, stock } = product;

  const handleAdd = (e) => {
    e.preventDefault();
    if (cartCount < stock) {
      addItemToCart(product);
    }
  };

  return (
    <div>

      <Link className="no-underline shadow rounded-xl" to={`/product/${_id}`}>
        <div className="overflow-hidden rounded-lg shadow-lg  w-80 h-100 bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl  ">

          <div className="rounded-xl  lg:w-full lg:h-70 c-card-image">
            <img src={image} alt={name} />
          </div>

          <div className="px-3 py-3 w-100 flex flex-col c-card-detail">
            <div className="ml-3">
              <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
            </div>
            <div className="flex justify-between ml-3 items-center">
              <p className="text-lg font-semibold text-slate-600 cursor-auto"> $ {price}</p>
              {stock === 0 ? (
                <h4 className="text-red-800 no-underline">Sin Stock</h4>
              ) : (
                <AddShoppingCartIcon onClick={handleAdd} className="custom-button1 mr-4"  />
                
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardProducts 