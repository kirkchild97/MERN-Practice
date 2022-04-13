import { useState } from "react"

const Form = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirm('');
    }

    const validateForm = (input) => {
        switch(input){
            case 'firstName':
                if(!firstName.length && isSubmitted){
                    return (<h3>First Name must not be blank</h3>);
                }
                else if(firstName.length < 2 && firstName.length){
                    return (<h3>First name must be at least 2 characters long.</h3>);
                }
                return '';
            case 'lastName':
                if(!lastName.length && isSubmitted){
                    return (<h3>Last Name must not be blank</h3>);
                }
                else if(lastName.length < 2 && lastName.length){
                    return (<h3>Last name must be at least 2 characters long.</h3>);
                }
                return '';
            case 'email':
                if(!email.length && isSubmitted){
                    return (<h3>Email must not be blank</h3>);
                }
                else if(email.length < 5 && email.length){
                    return (<h3>Email must be at least 5 characters long.</h3>);
                }
                return '';
            case 'password':
                if(!password.length && isSubmitted){
                    return (<h3>Password must not be blank</h3>);
                }
                else if(password.length < 8 && password.length){
                    return (<h3>Password must be at least 8 characters long.</h3>);
                }
                return '';
            case 'confirm':
                if(confirm !== password && isSubmitted){
                    return (<h3>Passwords must Match!</h3>);
                }
                else if(confirm !== password && confirm.length){
                    return (<h3>Passwords must Match!</h3>);
                }
                return '';
        }
    }


    return (
        <>
            <h1>Create User</h1>
            <form>
                <div>
                    { validateForm('firstName') }
                    <label>First Name</label>
                    <input type="text" onChange={ e => setFirstName(e.target.value) } value={firstName} />
                </div>
                <div>
                    { validateForm('lastName') }
                    <label>Last Name</label>
                    <input type="text" onChange={ e => setLastName(e.target.value) } value={lastName} />
                </div>
                <div>
                    { validateForm('email') }
                    <label>Email</label>
                    <input type="text" onChange={ e => setEmail(e.target.value) } value={email} />
                </div>
                <div>
                    { validateForm('password') }
                    <label>Password</label>
                    <input type="password" onChange={ e => setPassword(e.target.value) } value={password} />
                </div>
                <div>
                    { validateForm('confirm') }
                    <label>Confirm Password</label>
                    <input type="password" onChange={ e => setConfirm(e.target.value) } value={confirm} />
                </div>
                <button onClick={ e => {
                    e.preventDefault();
                    setIsSubmitted(true);
                }}>Submit</button>
                <button onClick={e => {
                    e.preventDefault();
                    resetForm();
                    setIsSubmitted(false);
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