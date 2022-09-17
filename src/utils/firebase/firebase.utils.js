import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBU3c4lpkGH-na0L431-pvzVrjowucq8UU",
  authDomain: "clothmarket-db.firebaseapp.com",
  projectId: "clothmarket-db",
  storageBucket: "clothmarket-db.appspot.com",
  messagingSenderId: "285178118512",
  appId: "1:285178118512:web:709424a323ab5f4df7cfb5"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef=doc(db,'users',userAuth.uid);
  const userSnapshot=await getDoc(userDocRef);
  
  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createAt=new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt
      });
    }
    catch(error){
      console.log('error : creating user',error.message);
    }
  }

  return userDocRef;
}