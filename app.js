const auth = firebase.auth()
function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}
function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In "+email.value);
    
   
}
//Take user to a different or homepage
function signOut(){
    auth.signOut();
    alert("Signed Out")
}

auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert("Active User "+email);
        window.open("main.html","_self");
        // is signed in
    }else {
        alert("No Active User");
        //no user siged in
    }
});



