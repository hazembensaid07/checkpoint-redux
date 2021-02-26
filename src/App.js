import AddTask from "./Components/AddTask/AddTask";
import Edit from "./Components/Edit";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
      <Edit />
    </div>
  );
}

export default App;
