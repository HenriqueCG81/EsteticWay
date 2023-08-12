import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Insira suas configurações do Firebase aqui
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID'
  // ...
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
