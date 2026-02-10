import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";      


 export const Header = () => {
    const [loginButtonReact,setloginButtonReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={() => {
                        loginButtonReact === "Login" 
                        ? setloginButtonReact("Logout") : setloginButtonReact("Login");
                        //this is called ternary operator, it is a short hand for if else statement
                        //below is the if else statement for the above ternary operator
                        // if(loginButtonReact === "Login"){
                        //     setloginButtonReact("Logout");
                        // }else{
                        //     setloginButtonReact("Login");
                        
                    }
                    }
                    >{loginButtonReact}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;