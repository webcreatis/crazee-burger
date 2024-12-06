import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type HeaderPropsType = {
  children: React.ReactNode; // represente tous les types d'éléments ou de contenu que React peut gérer
};

export default function Header({ children }: HeaderPropsType) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`;
