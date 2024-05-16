import AppName from "./components/AppName";
import AddToDo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems =[{
    name:'Buy Milk',
    date: '04/10/2023'
  },{
    name:'go to college',
    date: '04/10/2023'
  }]

  return (
    <center className="todo-container">
      <AppName/>
      <AddToDo />
      <TodoItems todoItems={todoItems}/>
    </center>
  );
}

export default App;
