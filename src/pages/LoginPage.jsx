import {Link} from "react-router-dom";
import {Login} from "../components/Login.jsx";

const LoginPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Авторизация</h1>
            <Login/>
            <p>
                <Link to="/register" className="btn btn-primary">
                    Зарегистрироваться
                </Link>
            </p>
        </div>
    )
}

export default LoginPage