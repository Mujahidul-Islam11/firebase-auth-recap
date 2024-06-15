import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";

const Form = () => {
    const [user, setUser] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    console.log(email, pass)

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setUser(result.user)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
        <h3>{user && user.email}</h3>
      <form
      onSubmit={handleSubmit}
        style={{
          border: "2px solid yellow",
          borderRadius: "8px",
          padding: "12px",
        }}
      >
        <input type="text" placeholder="type your name" name="name"/>
        <br />
        <input type="email" placeholder="type your email" name="email"/>
        <br />
        <input type="password" placeholder="type your pass" name="pass"/>
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Form;
