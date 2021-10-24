import React from "react";

// IMPORT STYLE
import {
  SelectorWrapper,
  SelectorImage,
  SelectorList,
  SelectorItem
} from "./Selector.styles";

const Selector = () => {
  return (
    <SelectorWrapper>
      <SelectorImage
        src="https://ik.imagekit.io/ppayaz/ppayaz-website/flag_fQzludPB8.png?updatedAt=1634221524609"
        alt="flag"
      />
      <SelectorList>
        <SelectorItem>Español</SelectorItem>
        <SelectorItem>English</SelectorItem>
      </SelectorList>
    </SelectorWrapper>
  );
};

export default Selector;
