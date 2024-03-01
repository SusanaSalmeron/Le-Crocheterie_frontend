import { create } from "zustand"

export interface Product {
    id: string
    image: string
    productName: string
    color: string[]
    size: string[]
    price: number
    quantity: number
}

interface State {
    cart: Product[]
    totalItems: number
    totalPrice: number
    shipping: number
    wrapping: number
}

interface Actions {
    addToCart: (Item: Product) => void
    removeFromCart: (Item: Product) => void
    increaseQuantity: (Item: Product) => void
    decreaseQuantity: (Item: Product) => void
    addWrappingCost: (Item: Product[]) => void
    removeWrappingCost: (Item: Product[]) => void
}

const INITIAL_STATE: State = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    shipping: 0,
    wrapping: 0
}

export const useCartStore = create<State & Actions>((set, get) => ({
    cart: INITIAL_STATE.cart,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    shipping: INITIAL_STATE.shipping,
    wrapping: INITIAL_STATE.shipping,
    addToCart: (product: Product) => {
        const cart = get().cart
        const cartItem = cart.find(item => item.id === product.id)
        // If the item already exists in the Cart, increase its quantity
        if (cartItem) {
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
            )
            set(state => ({
                cart: updatedCart,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + product.price,
                shipping: state.totalPrice + product.price < 60 ? 5 : 0
            }))
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }]

            set(state => ({
                cart: updatedCart,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + product.price,
                shipping: state.totalPrice + product.price < 60 ? 5 : 0
            }))
        }
    },
    removeFromCart: (product: Product) => {
        set(state => ({
            cart: state.cart.filter(item => item.id !== product.id),
            totalItems: state.totalItems - product.quantity,
            totalPrice: state.totalPrice - (product.price * product.quantity),
            shipping: state.totalPrice - product.price * product.quantity < 60 ? 5 : 0
        }))
    },
    increaseQuantity: (product: Product) => {
        const cart = get().cart
        const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
        )
        set(state => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
            shipping: state.totalPrice + product.price * product.quantity < 60 ? 5 : 0
        }))
    },
    decreaseQuantity: (product: Product) => {
        const cart = get().cart
        const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity: (item.quantity as number) - 1 } : item
        )
        set(state => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - product.price,
            shipping: state.totalPrice - product.price * product.quantity < 60 ? 5 : 0
        }))
    },
    addWrappingCost: (cart: Product[]) => {
        set(state => ({
            cart: state.cart,
            wrapping: 5
        }))

    },
    removeWrappingCost: (cart: Product[]) => {
        set(state => ({
            cart: state.cart,
            wrapping: 0
        }))

    }
}))
