// Move to register or login
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const loginContent = document.getElementById("login-content");
const registerContent = document.getElementById("register-content");
const landingContent = document.getElementById("landing");
const navContent = document.getElementById("botones");

loginBtn.addEventListener('click', () => {
    loginContent.style.display = "block";
    registerContent.style.diplay = "none";
    landingContent.style.display = "none";
    navContent.style.display = "none";
    loginGoogle();
});

registerBtn.addEventListener('click', () => {

    loginContent.style.display = "none";
    registerContent.style.display = "block";
    landingContent.style.display = "none";
    navContent.style.display = "none";
    loginGoogle();
});

// Funcion login with google

const loginGoogle = () => {
    const loginGoogle = document.getElementById('loginGoogle');
    loginGoogle.addEventListener('click', async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            console.log("Entro con google");
        } catch (error) {
            console.log(error);
        };
    });
};

// REGISTAR
const registerForm = document.getElementById("register-form");
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;
    auth
        .createUserWithEmailAndPassword(registerEmail, registerPassword)
        .then(userCreddentials => {
            registerForm.reset();
        })
});

//LOGIN
const loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;
    auth
        .signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(userCreddentials => {
            loginForm.reset();
        })
});

//LOGOUT
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("logout");
        navContent.style.display = "block";
        feedContent.style.display = "none";
    })
});

// Dentro de la pagina
const feedContent = document.getElementById("feed");
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("signin");
        loginContent.style.display = "none";
        registerContent.style.diplay = "none";
        feedContent.style.display = "block";
    }else{
        landingContent.style.display = "block";

    }
})




// //Observador de Firebase que verifica si estás logeado y esconde el register o si no estás logeado, solo te muestra el register. 
// firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         console.log("user");
//         botones.innerHTML= `
//         <button href="#" type="submit" id="loginGoogle">LOGIN</button>
//         `;
//         login();
//     }else{
//         console.log("no existe usuario")
//         botones.innerHTML=`
//         <button href="#" type="submit" id="registerGoogle">REGISTER</button>
//         `;
//         login();
//         console.log(registrate)
//     }


// })  //FUNCIONANDO BIEN para ocuparlo eventualmente 

