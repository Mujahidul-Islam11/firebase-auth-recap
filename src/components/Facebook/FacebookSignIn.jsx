import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";

const FacebookSignIn = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
  .then(result =>{
    console.log(result.user)
  })
  .catch(error =>{
    console.log(error)
  })
  return (
    <div>
      <button>Sign in with fb</button>
    </div>
  );
};

export default FacebookSignIn;
