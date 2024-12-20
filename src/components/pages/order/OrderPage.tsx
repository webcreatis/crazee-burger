import { ADMIN_TAB } from "@/enums/tab";
import { MenuProduct } from "@/types/Product";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useBasket } from "../../../hooks/useBasket";
import { useMenu } from "../../../hooks/useMenu";
import { theme } from "../../../theme";
import { findObjectById } from "../../../utils/array";
import { initialiseUserSession } from "./helpers/initialiseUserSession";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState<ADMIN_TAB>(
    ADMIN_TAB.ADD
  );
  const [newProduct, setNewProduct] = useState<MenuProduct>(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] =
    useState<MenuProduct>(EMPTY_PRODUCT);
  const titleEditRef = useRef<HTMLInputElement>(null);
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();
  const { username } = useParams();

  const handleProductSelected = async (idProductClicked: string) => {
    // Vérifie que menu n'est pas undefined
    if (!menu) return;
    const productClickedOn = findObjectById(idProductClicked, menu);
    setIsCollapsed(false);
    setCurrentTabSelected(ADMIN_TAB.EDIT);
    if (!productClickedOn) return;
    setProductSelected(productClickedOn);
    titleEditRef.current?.focus();
  };

  useEffect(() => {
    initialiseUserSession(username!, setMenu, setBasket); // on indique ici à typescript que username ne sera pas undefined
  }, []);

  const orderContextValue = {
    username,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  };

  //affichage (render)
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
