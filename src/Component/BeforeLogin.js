import logo from '../Assests/BeforeLoginLogo.jpg'
import { Link } from 'react-router-dom'
const BeforeLogin = () => {
    return <>
        <div className="app-container">
            <div className="box">
                <div><img src={logo} style={{ height: '87px', width: '100px', borderRadius: '60px' }} alt='here is an img'></img></div>
                <div className="typewriter">Welcome to Foddiee By Moddie</div>
                <h3>For more Info, login or signup</h3>
                <div className="button-container">
                    <div style={{ marginBottom: '19px' }}>
                        <Link to='./login'><button className="btn">Login</button></Link>
                    </div>
                    <div className="text-link">
                        <span className='btn-span'>Doesn't have an account? <Link to="/signup">Signup</Link></span>
                    </div>
                    <div className="text-link">
                    <span className='btn-span'>Continue without Login/Signup <Link to="/home">Continue</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default BeforeLogin
