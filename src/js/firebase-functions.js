/* eslint-disable */ 
const auth = firebase.auth();

const firebaseFunctions = {
  registerAccount: (email, password, username) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: username,
        });
        user.sendEmailVerification();
        alert('Check your email to verify the account and go to Login');
      })
      .catch((error) => {
        // console.log(error);
        alert(error.message);
      });
  },
  loginAccount: (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          window.location.assign('#/feed');
        } else {
          alert(
            'You need to verify your account to get in, check out your email to verify'
          );
          window.location.assign('#/landing');

          firebase.auth().signOut();
        }
      })
      .catch((error) => {
        // console.log(error);
        console.log(error);
      });
  },
  googleLogin: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        const user = auth.currentUser;
        console.log(user);
        window.location.hash = '#/feed';

      })
      .catch((error) => {
        window.location.hash = '#/landing'
        console.log(error);
      });
  },
  logoutAccount: () => {
    auth
      .signOut()
      .then(() => {
        // console.log('logout');
      })
      .catch(() => {
        // console.log(error);
      });
    window.location.hash = '';
  },
   userInfo: () => {
    const user = firebase.auth().currentUser;
    console.log(user);
    if (user != null) {
      return user1;
    } else {
      return 'no hay usuario';
    }
  }, 
};

export default firebaseFunctions;
