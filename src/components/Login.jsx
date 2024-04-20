import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from "./Form.jsx";
import {setUser} from "../store/slices/userSlice.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // {console.log(user.accessToken)}
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => {
                console.error;
                alert('Invalid')
            })
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}
export {Login}