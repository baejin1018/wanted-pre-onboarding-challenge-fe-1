import React from "react";

const TodoItem = ({ data }: any) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.content} </p>
    </div>
  );
};

export default TodoItem;
