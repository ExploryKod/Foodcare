import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import SignUpForm from "../components/sign-up-form.jsx";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <button className="button-container" onClick={logGoogleUser}>S'enregistrer avec Google</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
