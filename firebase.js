import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDenLTsUPx_BPVsQLPXzuNSUwxQLzvxAWA",
  authDomain: "rn-uber-eats-clone-b5f25.firebaseapp.com",
  projectId: "rn-uber-eats-clone-b5f25",
  storageBucket: "rn-uber-eats-clone-b5f25.appspot.com",
  messagingSenderId: "820666552767",
  appId: "1:820666552767:web:2aa1221531cb677924110a",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
