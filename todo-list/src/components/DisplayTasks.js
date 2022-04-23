const DisplayTasks = ({ tasks, removeTask, setTasks }) => { 
    const handleSelect = (task) => {
        const changeTask = task.isSelected ? { ...task, isSelected : false } : { ...task, isSelected : true }
        setTasks(tasks.map(findTask => {
            if(findTask.name === changeTask.name){
                return changeTask;
            }
            return findTask;
        }));
    }

    return (
        <div>
            <h2>All Tasks:</h2>
            <ul>
                {
                    tasks.map((task, index) => (
                        <div>
                            <input type="checkbox" checked={ task.isSelected } onClick={() => handleSelect(task)} />
                            <li className={task.isSelected ? "text-decoration-line-through":""} key={index}>{ task.name }</li>
                            <button onClick={() => removeTask(task)} className="btn btn-dark">Delete Task</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default DisplayTasks;