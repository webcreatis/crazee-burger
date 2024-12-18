import { ADMIN_TAB } from "@/enums/tab";
import { BasketProductQuantity, MenuProduct } from "@/types/Product";
import { createContext, Dispatch, SetStateAction } from "react";

type OrderContextType = {
  username?: string;
  isModeAdmin: boolean;
  setIsModeAdmin: Dispatch<SetStateAction<boolean>>;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  currentTabSelected: ADMIN_TAB;
  setCurrentTabSelected: Dispatch<SetStateAction<ADMIN_TAB>>;
  menu: MenuProduct[] | undefined;
  handleAdd: (newProduct: MenuProduct, username: string) => void;
  handleDelete: (idProductToDelete: string, username: string) => void;
  handleEdit: (productBeingUpdated: MenuProduct, username: string) => void;
  resetMenu: (username: string) => void;
  newProduct: MenuProduct;
  setNewProduct: Dispatch<SetStateAction<MenuProduct>>;
  productSelected?: MenuProduct;
  setProductSelected: (arg: MenuProduct) => void;
  handleProductSelected: (idProductClicked: string) => Promise<void>;
  titleEditRef: React.RefObject<HTMLInputElement>;
  basket: BasketProductQuantity[];
  handleAddToBasket: (idProductToAdd: string, username: string) => void;
  handleDeleteBasketProduct: (
    idBasketProduct: string,
    username: string
  ) => void;
};

export default createContext<OrderContextType | undefined>(undefined);
