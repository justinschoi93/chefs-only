import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";

import './Body.css';

const Body = () => {
    return (
        <body>
            <h1>CHEFS ONLY.</h1>
            <LoginButton />
            <LogoutButton />
        </body>
    )
}

export default Body;