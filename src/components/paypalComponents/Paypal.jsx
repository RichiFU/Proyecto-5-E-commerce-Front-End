import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//Context
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import ProductContext from "../../context/products/ProductContex";

export default function Paypal() {

    const {cartTotal, clearItemToCheckout, cartItems} = useContext(CartContext)
    const {reduceStock} = useContext(ProductContext)
    console.log(cartTotal)
    return (
        <PayPalScriptProvider options={{ "client-id": "AXXRvhmivNNJdT6r4SFsHYnT-_AMCjpT7rrwJOuMWvfLgsEaajds18HPedV5bVZmkLf53KsJ6AJPsr_U" }}>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "USD"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemToCheckout()
                    })
                }}
            />
        </PayPalScriptProvider>
    );
}