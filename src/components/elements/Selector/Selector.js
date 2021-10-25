import React from "react";

// IMPORT STYLE
import {
  SelectorWrapper,
  SelectorImage,
  SelectorList,
  SelectorItem
} from "./Selector.styles";

const Selector = () => {
  const languages = ["Español", "English"];

  return (
    <SelectorWrapper>
      <SelectorImage
        src="https://ik.imagekit.io/ppayaz/ppayaz-website/flag_fQzludPB8.png?updatedAt=1634221524609"
        alt="flag"
      />
      <SelectorList>
        <SelectorItem>{languages[0]}</SelectorItem>
        <SelectorItem>{languages[1]}</SelectorItem>
      </SelectorList>
    </SelectorWrapper>
  );
};

export default Selector;
