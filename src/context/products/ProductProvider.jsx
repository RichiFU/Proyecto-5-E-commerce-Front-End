import ProductContext from "./ProductContex";
import productReducer from "./productReducer";
import axiosClient from "../../config/axiosClient";
import { useReducer } from "react";


// aca se recibe el reducer, y se envia a todo los componentes que desee, desde provider

const ProductProvider = ({ children }) => {

    const initialState = {
        products: [],
        product: [{
            id: "",
            name: "",
            sku: "",
            price: 0, //son valores iniciales por eso lo dejo en 0 y el resto vacio
            image: "",
            stock: ""
        }]
    }

    // [estado del producto, funcion que actualiza el productState] = useReducer(nombre del reducer, valores que inicializa el estado el productState)
    const [productState, dispatch] = useReducer(productReducer, initialState)

    // cuando se ejecute getProducts, lo va a llenar con lo que rescate de la respuesta de la llamada a la API
    const getProducts = async () => {
        const response = await axiosClient.get("/products");
        const productos = response.data.info //es info, ya que el producto esta dentro de "info: product", en el backend

        // dispatch recibe un objeto en su interior con dos propiedades: tipo y carga
        // dispatch es la funcion que actualiza el estado actual del reducer
        dispatch({
            type: "GET_PRODUCTS", // Type hace referencia a el caso: GET_PRODUCTS
            payload: productos //aca le paso con lo que quiero que se llene "productos"
        })
    }

    const getProductById = async (id) => {

        try {

            const response = await axiosClient.get(`/product/${id}`); //axiosclient esta en config, con su id dinamico
            const productInfo = response.data.product

            dispatch({
                type: "GET_PRODUCT",
                payload: productInfo
            })
        } catch (error) {
            console.log(error)
        }
    }

    const reduceStock = async (cartItems) => {
        const productos = { cartItems }
        const result = await axiosClient.put("/reduceStock", productos)
        console.log(result)
    }


    return (
        <ProductContext.Provider value={{
            getProducts,
            getProductById,
            products: productState.products,
            product: productState.product,
            reduceStock
        }}>{children}</ProductContext.Provider>
    )

}

export default ProductProvider