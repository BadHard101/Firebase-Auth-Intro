import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "../hooks/use-auth.jsx"
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice.jsx";

const HomePage = () => {
    const navigate = useNavigate();
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return isAuth ? (
        <div>
            <h1>Welcome</h1>
            <button onClick={() => dispatch(removeUser())}>
                Log out from {email}
            </button>
        </div>
    ) : null;
}

export default HomePage;