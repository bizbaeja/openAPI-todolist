
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref,  get } from "firebase/database";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
export const db = getFirestore(app);
export  function login(){
    signInWithPopup(auth, provider)
    .catch(console.error);
}

export  function logout(){
const auth = getAuth();
    signOut(auth);
 }

export function onUserStateChange(callback){
    onAuthStateChanged(auth, async(user) => {
        const updatedUser = user ?  await adminUser(user)  : null;
        // console.log(user)
        callback(updatedUser);
      });
    
}
async function adminUser(user){
    return get(ref(database, 'admins'))
    .then((snapshot)=> {
        if(snapshot.exists()){
            const admins = snapshot.val();
            const isAdmin = admins.includes(user.uid);
            return {...user, isAdmin}
        }
    })
}