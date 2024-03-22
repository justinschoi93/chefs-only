import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";

import './Body.css';

const Body = () => {
    return (
        <div className="body">
            <h1>CHEFS ONLY.</h1>
            <LoginButton />
            <LogoutButton />
        </div>
    )
}

export default Body;