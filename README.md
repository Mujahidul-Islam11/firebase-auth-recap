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
<li>Call the GoogleAuthProvider:- const provider = new GoogleAuthProvider()</li>
<li>Import browser popup by using firebase signInWithPopUp method:- signInWithPopUp()</li>
<li>And pass the auth and provider inside the signInWithPopUp as parameter</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)}) and catch error .catch(error =>{
    console.error(error)
})</li>
</ul>

<h3>Create user by github signIn</h3>
<ul>
<li>Add a github provider from firebase project, give client id & client secret from github developers settings</li>
<li>Create a new github app for the client id & client secret:- give a github app name, desc, homepage url, callback url from github provider that we are creating from our firebase project</li>
<li>Call the GithubAuthProvider:- const provider = new GithubAuthProvider()</li>
<li>Import browser popup by using firebase signInWithPopUp method:- signInWithPopUp()</li>
<li>And pass the auth and provider inside the signInWithPopUp(auth, provider) as parameter</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)}) and catch error .catch(error =>{
    console.error(error)
})</li>
</ul>
