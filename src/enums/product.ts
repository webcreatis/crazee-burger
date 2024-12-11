import { MenuProduct } from "@/types/Product"

type BasketMessage = {
  EMPTY: string,
  LOADING: string,
  NOT_AVAILABLE: string,
}

export const EMPTY_PRODUCT:MenuProduct = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isPublicised: false,
})

export const IMAGE_COMING_SOON = "/images/coming-soon.png"
export const IMAGE_NO_STOCK = "/images/stock-epuise.png"

export const BASKET_MESSAGE:BasketMessage = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
  NOT_AVAILABLE: "Non disponible",
}
