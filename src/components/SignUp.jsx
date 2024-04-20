import {useDispatch} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Form} from "./Form.jsx";
import {setUser} from "../store/slices/userSlice.jsx";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            title="register"
            handleClick={handleRegister}
        />
    )
}
export {SignUp}