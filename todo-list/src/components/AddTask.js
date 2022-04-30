import { useState } from "react";

const AddTask = ({ submitTask }) => {
    const [taskName, setTaskName] = useState('');
    const [message, setMessage] = useState({ isError: false, message: ''});
    
    const handleInput = (e) => {
        setTaskName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName === ''){
        setMessage({isError: true, message: 'Cannot Submit Blank Task!'});
        return;
        }
        const trySubmit = submitTask(taskName);
        if(trySubmit){
            setTaskName('');
            setMessage({ isError: false, message: 'Added Task!'});
        } else{
            setMessage({ isError: true, message : 'Unable to Add Task!!'});
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <p className={message.isError ? 'text-danger' : 'text-success'}>{message.message}</p>
            <label>Add Task:</label>
            <input type="text" onChange={(e) => handleInput(e)} value={taskName} />
            <input type="submit" value="Add Task" />
        </form>
    )
}

export default AddTask;