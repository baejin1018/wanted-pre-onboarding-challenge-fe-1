import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = () => {
  const style = css`
    ${reset}
  `;
  return <Global styles={style} />;
};

export default GlobalStyle;
