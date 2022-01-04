/* eslint-disable */
import { someStyling } from './style-manager.js';
import { router } from './router.js';
import firebaseFunctions from './firebase-functions.js';

// Manejo de las rutas
router();

// cambio de algunos stilos con js
window.addEventListener('hashchange', () => {
  const footer = document.querySelector('footer');
  const title = document.querySelector('title');
  someStyling(window.location.pathname, footer, title);
});

// Get change when it goes inside the page (posts feed)
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (!user.emailVerified) {
      console.log(user);
      window.location.hash = '#/landing';
    }
    // console.log(user);

  } else {
    window.location.hash = '#/landing';
    // console.log(firebaseFunctions.userInfo());
  }
});
