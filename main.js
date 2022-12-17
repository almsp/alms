// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0WzMQIQS-skVFkOlgh72aTNI7Scc8lpU",
    authDomain: "auth-form-2595f.firebaseapp.com",
    projectId: "auth-form-2595f",
    storageBucket: "auth-form-2595f.appspot.com",
    messagingSenderId: "266906830169",
    appId: "1:266906830169:web:75a54a27783902518df848"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            window.location.href = "index1.html"
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
            window.location.href = "index1.html"
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}