import "./App.css";
import { useState } from "react";

function App() {
  let addtask = () => {
    if (tasklist == "") {
      alert("Enter your To-Do-List!!!", window.location.reload())
    }
    settodoList([
      ...todoList,
      { id: todoList.length + 1, name: `${tasklist}`, isDone: false },
    ]);
  };
  let taskdone = (id) => {
    let itemList = todoList.findIndex((obj) => obj.id === id);
    settodoList([...todoList]);
    if (todoList[itemList].isDone === false) {
      todoList[itemList].isDone = true;
    } else if (todoList[itemList].isDone == true) {
      todoList[itemList].isDone = false;
    }
  };
  let deletetask = (id) => {
    let removetask = todoList.findIndex((obj) => obj.id === id);
    todoList.splice(removetask, 1);
    settodoList([...todoList]);
  };

  const [tasklist, setTaskList] = useState("");
  const [todoList, settodoList] = useState([]);
  return (
    <div className="content">
      <h1 className="todo">To-Do-List</h1>
      <input className="ib" type="text" placeholder="Create your To-Do-List!" onChange={(e) => setTaskList(e.target.value)}></input>{" "}
      <button onClick={addtask}>Add Task</button>
      <ul>
        {todoList.map((item) => {
          return (
            <li className={item.isDone ? "markdone" : ""}>{item.name} - <button onClick={() => taskdone(item.id)}>Done</button> - <button onClick={() => deletetask(item.id)}>Delete</button></li>
          )
        })
        }
      </ul>
    </div>
  );
}

export default App;