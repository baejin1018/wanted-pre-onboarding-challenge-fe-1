export interface postTodoType {
  title: string;
  content: string;
}

export interface todoDataType extends postTodoType {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}
