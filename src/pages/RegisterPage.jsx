import {Link} from "react-router-dom";
import {SignUp} from "../components/SignUp.jsx";

const RegisterPage = () => {
    return (
        <div>
            <h1>Регистрация</h1>
            <SignUp/>
            <p>
                <Link to="/login">
                    Авторизация
                </Link>
            </p>
        </div>
    )
}

export default RegisterPage