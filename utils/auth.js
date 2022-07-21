import firebase from 'firebase/app';
import 'firebase/auth';

// grabbing googleauth so firebase knows what to popup
// to use firebase.auth always import it (firebase/auth)

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export { signIn, signOut };
