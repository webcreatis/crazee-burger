import CasinoEffect from "@/components/reusable-ui/CasinoEffect";
import Header from "@/components/reusable-ui/Header";
import OrderContext from "@/context/OrderContext";
import { formatPrice } from "@/utils/maths";
import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { calculateSumToPay } from "./helper";

export default function BasketHeader() {
  const orderContext = useContext(OrderContext);
  if (orderContext === undefined)
    throw new Error("OrderContext must be used within an OrderProvider");
  const { basket, menu } = orderContext;

  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <BasketHeaderStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
      </BasketHeaderStyled>
    </Header>
  );
}

const BasketHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
