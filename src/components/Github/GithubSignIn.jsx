import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";


const GithubSignIn = () => {
    
    return (
        <div>
            <button onClick={handleSignIn}>Sign In with Github</button>
        </div>
    );
};

export default GithubSignIn;