import styled from "@emotion/styled";

export const TodoDetailModalContainer = styled.div`
  padding: 30px;
  position: absolute;
  top: 25%;
  left: 29%;
  z-index: 3;
  width: 770px;
  height: 500px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;
export const TodoTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;

export const TodoContent = styled.p`
  margin-top: 20px;
  padding-left: 3px;
  font-size: 1rem;

  width: max-content;
  max-width: 700px;
  height: auto;
  word-break: break-all;
  white-space: pre-line;
`;
