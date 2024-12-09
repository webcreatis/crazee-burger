import { useState } from "react"
import { deepClone, findIndexById, findObjectById, removeObjectById } from "../utils/array"
import { setLocalStorage } from "../utils/window"


type Basket = {
  id:string,
  quantity:number
}

export const useBasket = () => {
  const [basket, setBasket] = useState<Basket[]>([])

  const handleAddToBasket = (idProductToAdd: string, username:string): void => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
      return
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username)
  }

  const incrementProductAlreadyInBasket = (idProductToAdd:string, basketCopy: Basket[], username:string): void => {
    const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
    setLocalStorage(username, basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd:string, basketCopy: Basket[], setBasket: React.Dispatch<React.SetStateAction<Basket[]>>, username:string) :void => {
    // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
    
    setBasket(newBasket)
    setLocalStorage(username, newBasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct:string, username: string):void => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct }
}
