import styled from "@emotion/styled";

export const TodoEachItemContainer = styled.div<{ isSuccess: Boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  min-height: 80px;
  border-bottom: 1px solid #0000004c;
  background-color: white;

  text-decoration-line: ${(props) =>
    props.isSuccess ? "line-through" : "none"};
`;

export const TodoItemTitle = styled.h1`
  margin-bottom: 15px;
  color: #5cb85c;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const DeleteAndSuccessButtonContainer = styled.div``;

export const TitleContentContainer = styled.div``;

export const TodoContent = styled.div`
  width: max-content;
  max-width: 300px;
  height: auto;
  word-break: break-all;
  white-space: pre-line;
`;
