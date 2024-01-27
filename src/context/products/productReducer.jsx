// no es un componente, es una funcion, por eso va con minuscula "productReducer"

// parametro state: son los estados actuales en initialState: "product y products", parametro action, se destructuriza en dos
const productReducer = (state, action) => {

    const { type, payload } = action;

    // Switch y Case
    // key = type
    // value = toma el nombre de lo que uno quiera llamar
    switch (type) {

        case "GET_PRODUCTS":
            // retorna el spread del estado, osea todos sus valores iniciales
            return {
                ...state,
                products: payload, //y a products se le pasa la carga
                product: [{
                    id: "",
                    name: "",
                    sku: "",
                    price: 0,
                    image: "",
                    stock: ""
                }]
            }

        case "GET_PRODUCT": //getProductById
            return {
                ...state,
                product: [payload] //la carga va dentro de un array, porque la payload es un objeto {}
            }

        default:
            // si falla retorna el estado tal y como esta
           return state
            }
    }

    export default productReducer