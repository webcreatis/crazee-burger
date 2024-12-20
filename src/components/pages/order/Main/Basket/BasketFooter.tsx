import Header from "@/components/reusable-ui/Header";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
  return (
    <Header>
      <BasketFooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
      </BasketFooterStyled>
    </Header>
  );
}

const BasketFooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`;
