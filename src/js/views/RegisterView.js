import firebaseFunctions from '../firebase-functions.js';

export default () => {
  const registerView = `
        <div class="new-colors">
        <div class="container">
                <form id="register-form">
                    <h1 class="title-form">Register</h1>
                    <input class="input-data" type="text" id="username" placeholder="Nombre de usuario" required>
                    <input class="input-data" type="email" id="register-email" placeholder="Email" required>
                    <input class="input-data" type="password" id="register-password" placeholder="Contraseña" required>
                    <input class="input-data" type="password" id="register-password-confirmed" placeholder="Confirma tu contraseña" required>
                    <button class="action-btn" type="submit" id="register-btn"> Registrate </button>
                </form>
           
                <div id="break-section">
                    <div class="line">&nbsp;</div>
                    <div class="or">O</div>
                    <div class="line">&nbsp;</div>
                </div>
                
                <button class="action-google" type="button" id="loginGoogle"> <span>Ingresa con </span> <img class="img-google" src="./css/img_app/google.png" alt="google"><span> OOGLE </span></button>
           
                <h3 class="enter"> ¿Ya tienes cuenta? 
                <a href="#/login" id="link-redirect"> Ingresa aquí </a>
                </h3>
                </div>
        </div>
            `;

  const registerElement = document.createElement('section');
  registerElement.innerHTML = registerView;

  const googleButton = registerElement.querySelector('#loginGoogle');
  googleButton.addEventListener('click', () => {
    firebaseFunctions.googleLogin();
  });

  const registerForm = registerElement.querySelector('#register-form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userRegistration = {
      username: registerElement.querySelector('#username').value,
      email: registerElement.querySelector('#register-email').value,
      password: registerElement.querySelector('#register-password').value,
      confirmedPassword: registerElement.querySelector('#register-password-confirmed').value,
    };

    if (userRegistration.password === userRegistration.confirmedPassword) {
      firebaseFunctions.registerAccount(
        userRegistration.email,
        userRegistration.password,
        userRegistration.username,
      );
    } else {
      // console.log('try again');
    }
  });

  return registerElement;
};
