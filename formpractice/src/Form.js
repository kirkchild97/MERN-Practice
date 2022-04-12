import { useState } from "react"

const Form = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirm('');
    }

    return (
        <>
            <h1>Create User</h1>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={ e => setFirstName(e.target.value) } value={firstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={ e => setLastName(e.target.value) } value={lastName} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={ e => setEmail(e.target.value) } value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={ e => setPassword(e.target.value) } value={password} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={ e => setConfirm(e.target.value) } value={confirm} />
                </div>
                <button onClick={e => {
                    e.preventDefault();
                    resetForm();
                    }}>Reset Data</button>
            </form>
            <div>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirm }</p>
            </div>
        </>
    )
}

export default Form;