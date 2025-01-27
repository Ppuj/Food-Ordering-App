import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Signup = () => {
    const [Name, setName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.email === email);
        if (userExists) {
            alert("This email is already registered. Please use a different email.");
            return;
        }
        const newUser = { Name, email, password };
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('Name', Name);
        navigate('/home')
    }
    return <>
        <div className="app-container">
            <div className="box">
                <h1>User Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div><input type='text' value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></input></div>
                    <div><input type='text' value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter Email"></input></div>
                    <div><input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password"></input></div>
                    <button className="btn" style={{ marginRight: '12px' }}>Signup</button>
                    <Link to='/'><button className="btn">Back</button></Link>
                    <div className="text-link">
                        <span className='btn-span'>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Signup