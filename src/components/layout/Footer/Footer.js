import React from "react";

//IMPORT STYLE
import { FooterWrapper, FooterList, FooterItem } from "./Footer.styles";

const Footer = () => {
  const list = [
    "Contactos",
    "Privacidad",
    "Acuerdos legales",
    "Mundo",
    "isele et erwan"
  ];

  return (
    <FooterWrapper>
      <FooterList>
        {list.map(item => (
          <FooterItem>{item}</FooterItem>
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
