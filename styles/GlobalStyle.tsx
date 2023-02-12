import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = () => {
  const style = css`
    * {
      box-sizing: border-box;
    }
    ${reset}
  `;
  return <Global styles={style} />;
};

export default GlobalStyle;
