import OrderContext from "@/context/OrderContext";
import { basketAnimation } from "@/theme/animations";
import { findObjectById } from "@/utils/array";
import { formatPrice } from "@/utils/maths";
import { convertStringToBoolean } from "@/utils/string";
import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import {
  BASKET_MESSAGE,
  IMAGE_COMING_SOON,
} from "../../../../../../enums/product";
import { checkIfProductIsClicked } from "../../MainRightSide/Menu/helper";
import BasketCard from "./BasketCard";

export default function BasketProducts() {
  const orderContext = useContext(OrderContext);

  if (orderContext === undefined)
    throw new Error("OrderContext must be used within an OrderProvider");

  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = orderContext;

  const handleOnDelete = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    event.stopPropagation();
    if (username === undefined) return;
    handleDeleteBasketProduct(id, username);
  };

  return (
    // @ts-ignore
    <TransitionGroup
      component={BasketProductsStyled}
      className={"transition-group"}
    >
      {basket.map((basketProduct) => {
        if (!menu) return;
        const menuProduct = findObjectById(basketProduct.id, menu);

        if (!menuProduct) return;

        return (
          <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={basketProduct.id}
            timeout={300}
          >
            <div className="card-container">
              <BasketCard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : IMAGE_COMING_SOON
                }
                quantity={basketProduct.quantity}
                onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                isClickable={isModeAdmin}
                onClick={
                  isModeAdmin
                    ? () => handleProductSelected(basketProduct.id)
                    : undefined
                }
                isSelected={checkIfProductIsClicked(
                  basketProduct.id,
                  productSelected.id
                )}
                className={"card"}
                price={
                  convertStringToBoolean(menuProduct.isAvailable)
                    ? formatPrice(menuProduct.price)
                    : BASKET_MESSAGE.NOT_AVAILABLE
                }
                isPublicised={convertStringToBoolean(menuProduct.isPublicised)}
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    position: relative;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }

  ${basketAnimation}
`;
