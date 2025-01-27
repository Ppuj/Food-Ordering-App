import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
const Login = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('Name', user.Name);
            alert('Login successful!');
            navigate('/home');
          } else {
            alert('Invalid credentials. Please try again.');
          }
    }
    return <>
        <div className="app-container">
            <div className="box">
                <h1>User Login</h1>
                <form onSubmit={handleLogin}>
                    <div><input type='text' value={email}  onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" required></input></div>
                    <div><input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password" required></input></div>
                    <div style={{marginTop:'32px'}}>
                        <button className="btn" style={{marginRight:'12px'}}>Login</button>
                        <Link to='/'><button className="btn">Back</button></Link>
                        <div className="text-link">
                            <span className='btn-span'>Doesn't have an account? <Link to="/signup">Signup</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Login