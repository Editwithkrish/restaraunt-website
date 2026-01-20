"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
}

export interface CustomerData {
    name: string
    phone: string
    address: string
}

interface CartContextType {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
    customer: CustomerData
    updateCustomer: (data: Partial<CustomerData>) => void
    isCartOpen: boolean
    setIsCartOpen: (isOpen: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [customer, setCustomer] = useState<CustomerData>({
        name: "",
        phone: "",
        address: ""
    })

    // Load cart and customer from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("suruchi_cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart", e)
            }
        }

        const savedCustomer = localStorage.getItem("suruchi_customer")
        if (savedCustomer) {
            try {
                setCustomer(JSON.parse(savedCustomer))
            } catch (e) {
                console.error("Failed to parse customer data", e)
            }
        }
    }, [])

    // Save cart to localStorage on changes
    useEffect(() => {
        localStorage.setItem("suruchi_cart", JSON.stringify(items))
    }, [items])

    // Save customer to localStorage on changes
    useEffect(() => {
        localStorage.setItem("suruchi_customer", JSON.stringify(customer))
    }, [customer])

    const addItem = (newItem: CartItem) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === newItem.id)
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                )
            }
            return [...prevItems, newItem]
        })
    }

    const removeItem = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id)
            return
        }
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setItems([])
    }

    const updateCustomer = (data: Partial<CustomerData>) => {
        setCustomer(prev => ({ ...prev, ...data }))
    }

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                customer,
                updateCustomer,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
