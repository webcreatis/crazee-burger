import OrderContext from "@/context/OrderContext";
import { useContext } from "react";
import { isEmpty } from "../../../../../../utils/array";
import BasketProducts from "./BasketProducts";
import EmptyBasket from "./EmptyBasket";

export default function BasketBody() {
  const orderContext = useContext(OrderContext);

  if (orderContext === undefined)
    throw new Error("OrderContext must be used within an OrderProvider");
  const { basket, menu } = orderContext;

  return (
    <>
      {isEmpty(basket) ? (
        <EmptyBasket isLoading={menu === undefined} />
      ) : (
        <BasketProducts />
      )}
    </>
  );
}
