import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FoodData from "./FoodData";
import { useCart } from "./CartContext";
const Home = () => {
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const userName = localStorage.getItem('Name');

    const handleLogout = () => {
        if (userName) {
            alert('Are u sure u want to logout?')
            localStorage.removeItem('Name');
        }
        navigate('/login');
    };
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const goToCart = () => {
        navigate('/cart');
    };
    const goToOrderHistory = () => {
        navigate('/order-history');
    };
    return <>
        <div className="homediv">
            <div className="navbar">
                <div className="navbar-left">
                    <h2>Foodiee!!@😋😋</h2>
                </div>
                <div className="navbar-right">
                    <div className="cart" onClick={goToOrderHistory}>{userName ? 'Order History' : ''}</div>
                    <div className="cart" onClick={goToCart}>{userName ? 'Cart🛒' : ''}{cartItems.length > 0 && <span className="red-dot"></span>}</div>
                    <div className="user-info">
                        <div className="profile-circle" onClick={toggleDropdown}>
                            <span className="profile-icon">{userName ? userName.charAt(0).toUpperCase() : 'G'}</span>
                        </div>
                        {dropdownVisible && (
                            <div className="dropdown-menu">
                                <span>Welcome, {userName ? userName : 'Guest'}</span>
                                <button onClick={handleLogout} className="logout-btn">{userName ? 'Logout' : 'Login'}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <FoodData userName={userName} />
        </div>
    </>
}
export default Home