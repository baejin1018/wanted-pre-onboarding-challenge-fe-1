import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = () => {
  const style = css`
    * {
      box-sizing: border-box;
    }
    h1 {
      font-family: "Titillium Web", sans-serif !important;
    }
    ${reset}
  `;
  return <Global styles={style} />;
};

export default GlobalStyle;
