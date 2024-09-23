
import { create } from "zustand";


const useCartStore = create((set)=>({

    Cart:[],
    addToCart:(product) => set((state) => ({Cart:[...state.Cart, product]})),
    removefromCart:(productId) => set((state) => ({Cart: state.Cart.filter(product => product.id !== productId)}))

}))

export default useCartStore