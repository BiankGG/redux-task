import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAlls, checkAlls, deleteAlls } from "./redux/todosSlice";

const App = () => {
  const all = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  const [alert, setAlert] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddAlls = () => {
    if (text) {
      dispatch(addAlls(text));
      setText("");
      setAlert("");
    } else {
      setAlert("Add a todo");
    }
  };

  const handleCheckAlls = (id) => {
    dispatch(checkAlls(id));
  };

  const handleDeleteAlls = (id) => {
    dispatch(deleteAlls(id));
  };

  return (
    <>
      <div>
        <h2>To Do List</h2>
        <ul>
          {all.map((todo) => (
            <div key={todo.id}>
              <li
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </li>
              <button onClick={() => handleCheckAlls(todo.id)}>
                Finished
              </button>
              <button onClick={() => handleDeleteAlls(todo.id)}>Delete</button>
            </div>
          ))}
        </ul>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAddAlls}>Add</button>
        <h3>Total: {all.length}</h3>
      </div>
    </>
  );
};

export default App;
