import { signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";


const GithubSignIn = () => {
    const [user, setUser] = useState({})
    const provider = new GithubAuthProvider();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign out successful");
                setUser(null); // Update the user state
            })
            .catch((error) => {
                console.error("Sign out error:", error); 
            });
    }

    const handleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleSignIn}>Sign In with Github</button>
            <button onClick={handleSignOut}>Sign Out</button>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default GithubSignIn;