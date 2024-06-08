import { createContext, useContext } from "react";

export const cartcontext = createContext({
    cartquantity :0 ,
    addcartquantity:    (todo)=>{},
    // updatetodo: (id , todo)=>{},
    // deletetodo: (id)=>{},
    // toggletodo : (id)=>{},
});

export const CartProvider = cartcontext.Provider;

export const useCart = ()=>{
    return useContext(cartcontext)
}