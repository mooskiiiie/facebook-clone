import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBDYVVWtHxmfJxkiLAHtIoK_NNeD6GUmlY",
    authDomain: "facebook-clone-b8306.firebaseapp.com",
    projectId: "facebook-clone-b8306",
    storageBucket: "facebook-clone-b8306.appspot.com",
    messagingSenderId: "925906027005",
    appId: "1:925906027005:web:a9bb027547e2fa5a33d994",
    measurementId: "G-1FYWQE9KNL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;