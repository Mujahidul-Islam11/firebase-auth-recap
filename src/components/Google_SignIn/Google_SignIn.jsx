import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";

const Google_SignIn = () => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user)
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        <h2>Welcome, {user?.displayName}</h2>
        <p>{user?.email}</p>
        <img src={user?.photoURL} alt="" />
    </div>
  );
};

export default Google_SignIn;
