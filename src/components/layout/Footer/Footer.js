import React from "react";

//IMPORT STYLE
import { FooterWrapper, FooterList, FooterItem } from "./Footer.styles";

const Footer = () => {
  const list = ["Contactos", "Privacidad", "Acuerdos legales", "Mundo"];

  return (
    <FooterWrapper>
      <FooterList>
        {list.map((item, i) => (
          <FooterItem key={i}>{item}</FooterItem>
        ))}
        {/* <FooterItem>Contactos</FooterItem>
        <FooterItem>Privacidad</FooterItem>
        <FooterItem>Acuerdos legales</FooterItem>
        <FooterItem>Mundo</FooterItem> */}
      </FooterList>
    </FooterWrapper>
  );
};

export default Footer;
