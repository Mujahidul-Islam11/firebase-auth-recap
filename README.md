<h2>User authentication using Firebase</h2>
<h3>Create user with email, pass</h3>
<ul>
<li>Call createUserWithEmailAndPassword()</li>
<li>And pass auth, email, and pass as parameter createUserWithEmailAndPassword(auth, email, pass)</li>
<li>After createUserWithEmailAndPassword() method call .then and .catch</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)})</li>
</ul>
<h3>Create user by google signIn</h3>
<ul>
<li>Call the GoogleAuthProvider:- const provider = GoogleAuthProvider()</li>
<li>Import google sign method of firebase:- signInWithPopUp()</li>
<li>And pass the auth and provider inside the signInWithPopUp as parameter</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)}) and catch error .catch(error =>{
    console.error(error)
})</li>
</ul>
