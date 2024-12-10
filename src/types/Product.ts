export type MenuProduct = {
  id: string,
  imageSource?: string,
  isAvailable: boolean,
  isPublicised: boolean,
  price?: number,
  title?: string,
  quantity:number
}

export type BasketProduct = {
  id:string,
  quantity:number
}