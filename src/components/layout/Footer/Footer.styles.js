import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #f7f9fa;
  height: 30px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
`;

export const FooterItem = styled.li`
  color: gray;
  font-size: 10px;
  font-family: helvetica;
`;
