import { signInWithRedirect } from "firebase/auth";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
// Asynchrone car on fait appel à une API et de la data externe
// // before destructuring the response: const response = await signInWithGooglePopup();
//         createUserDocumentFromAuth(response)

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth( user )
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    );
};

export default SignIn;