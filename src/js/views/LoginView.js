import firebaseFunctions from '../firebase-functions.js';

export default () => {
  const loginView = `
         <div class="new-colors">
         <div class="container">
                <form id="login-form" action="#/feed" method="post">
                    <h1 class="title-form">Log in</h1>
                    <input class="input-data" type="email" id="login-email" placeholder="Ingresa tu Email" required>
                    <input class="input-data" type="password" id="login-password" placeholder="Ingresa tu contraseña" required>
                    <button class="action-btn" type="submit" id="login-btn">Ingresa</button>
                </form>

                <div id="break-section">
                    <div class="line">&nbsp;</div>
                    <div class="or">O</div>
                    <div class="line">&nbsp;</div>
                </div>
                
                <button class="action-google" href="#" type="button" id="loginGoogle"> <span> Ingresa con </span> 
                    <img class="img-google" src="./css/img_app/google.png" alt="google"> <span> OOGLE </span></button>
                <h3 class="enter"> ¿No tienes cuenta? 
                <a href="#/register" id="link-redirect"> Registrate aquí </a>
                </h3>
               
            </div>
        </div>
        `;

  // Debo crear un elemento para hacer el append del mismo en el root
  const loginElement = document.createElement('section');
  loginElement.innerHTML = loginView;

  // Funcionalidad del boton de Google
  const googleButton = loginElement.querySelector('#loginGoogle');
  googleButton.addEventListener('click', () => {
    firebaseFunctions.googleLogin();
    //window.location.hash = '#/feed';
  });

  // funcionalidad del login sin google
  const loginForm = loginElement.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginElement.querySelector('#login-email').value;
    const password = loginElement.querySelector('#login-password').value;
    firebaseFunctions.loginAccount(email, password);
    window.location.hash = '#/feed';
  });

  return loginElement;
};
