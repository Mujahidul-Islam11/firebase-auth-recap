<h2>Create user with email, pass</h2>
<ul>
<li>Call createUserWithEmailAndPassword()</li>
<li>And pass auth, email, and pass as parameter createUserWithEmailAndPassword(auth, email, pass)</li>
<li>After createUserWithEmailAndPassword() method call .then and .catch</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)})</li>
</ul>

<h2>Create user by google signIn</h2>
<ul>
<li>Call the GoogleAuthProvider:- const provider = new GoogleAuthProvider()</li>
<li>Import browser popup by using firebase signInWithPopUp method:- signInWithPopUp()</li>
<li>And pass the auth and provider inside the signInWithPopUp as parameter</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)}) and catch error .catch(error =>{
    console.error(error)
})</li>
</ul>

<h2>Create user by github signIn</h2>
<h4>Github app creation process</h4>

<ol>
<li>Add a github provider from firebase project, give client id & client secret from github developers settings</li>
<li>Create a new github app for the client id & client secret:- give a github app name, desc, homepage url, callback url from github provider that we are creating from our firebase project</li>
</ol>
<h4>Code example for implementing github sign in:</h4>
<ul>
<li>Call the GithubAuthProvider:- const provider = new GithubAuthProvider()</li>
<li>Import browser popup by using firebase signInWithPopUp method:- signInWithPopUp()</li>
<li>And pass the auth and provider inside the signInWithPopUp(auth, provider) as parameter</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)}) and catch error .catch(error =>{
    console.error(error)
})</li>
</ul>

<h2>Create user by Facebook signIn</h2>
<h4>Facebook for developers App creation process</h4>

<ol>
<li>Go to meta for developers (https://developers.facebook.com/) login and create an facebook app</li>
<li>From the app dashboard's customize this app click on Customize adding a facebook login button </li>
<li>Go to quick start & select web. Set the site url</li>
<li>Go to settings. Set the valid OAuth redirects url's (Will take the url from the firebase project while setting the facebook provider)</li>
<li>Go to app use cases and from App settings go to the basic route and copy the app id, app secret and paste it on the fields while creating a facebook provider for your project at firebase</li>
</ol>
<h4>Code example for implementing facebook sign in:</h4>
<ul>
<li>Call the FacebookAuthProvider:- const provider = new FacebookAuthProvider()</li>
<li>Import browser popup by using firebase signInWithPopUp method:- signInWithPopUp()</li>
<li>And pass the auth and provider inside the signInWithPopUp(auth, provider) as parameter</li>
<li>Access the response from firebase inside .then(result => {console.log(result.user)}) and catch error .catch(error =>{
    console.error(error)
})</li>
</ul>
