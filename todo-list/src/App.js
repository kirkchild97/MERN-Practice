import { useState } from "react";

import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const submitTask = (task) => {console.log(task);
    const newTask = { name  : task, isSelected : false }
    if(tasks.filter(testTask => testTask.name === task).length){
      return false;
    }
    else{
      setTasks([...tasks, newTask]);
      return true;
    }
  }

  const removeAllSelected = () => {
    setTasks(tasks.filter(task => !task.isSelected));
  }

  const removeTask = (removeTask) => {
    setTasks(tasks.filter(task => task != removeTask));
  }

  return (
    <div>
      <AddTask submitTask={submitTask} />
      <DisplayTasks setTasks={setTasks} tasks={tasks} removeTask={removeTask} />
      {
      tasks.filter(task => task.isSelected === true).length ?
      <button onClick={() => removeAllSelected()} className="btn btn-danger">Remove All Selected Tasks</button> :
      ''
      }
    </div>
  );
}

export default App;
