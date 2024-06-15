/* eslint-disable no-unused-vars */
import Form from "../Form/Form";
import GithubSignIn from "../Github/GithubSignIn";
import Google_SignIn from "../Google_SignIn/Google_SignIn";



const Home = () => {
  return (
    <div>
      <h3>This is home</h3>
      {/* <Form></Form> */}
      {/* <Google_SignIn></Google_SignIn> */}
      <GithubSignIn></GithubSignIn>
    </div>
  );
};

export default Home;
