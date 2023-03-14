import "./index.css";
import TodoItem from "../todoItem";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div className="TodoList">
      {todoList.map((thing) => (
        <TodoItem key={thing.id} todoEl={thing} setTodoList={setTodoList} />
      ))}
    </div>
  );
};

export default TodoList;
