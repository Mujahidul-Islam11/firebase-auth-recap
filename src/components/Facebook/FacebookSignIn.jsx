import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";

const FacebookSignIn = () => {
    const [user, setUser] = useState({})
  const provider = new FacebookAuthProvider();
  const handleSignIn = () =>{
    signInWithPopup(auth, provider)
  .then(result =>{
    console.log(result.user)
    setUser(result.user)
  })
  .catch(error =>{
    console.log(error)
  })
  }
  return (
    <div>
      <button onClick={handleSignIn}>Sign in with fb</button>
      <img src={user?.photoURL} alt="" />
    </div>
  );
};

export default FacebookSignIn;
