// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as signOutFirebase,
  User,
  getIdTokenResult
} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWcwH_q5vnqSRhtiIZShtNray1aYzRRtI",
  authDomain: "suppis-382f9.firebaseapp.com",
  projectId: "suppis-382f9",
  storageBucket: "suppis-382f9.appspot.com",
  messagingSenderId: "847554464937",
  appId: "1:847554464937:web:2afeb9e429ff128bd12db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore()

const provider = new GoogleAuthProvider()
export const auth = getAuth()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .catch((reason) => {
      console.error(reason)
    })
}

// Sign current user out
export const signOut = () => {
  signOutFirebase(auth)
    .catch((error) => {
      console.error(error)
    });
}

/**
 * Callback function to get ID token for making request to the api
 * @returns idToken
 */
export const getIdTokenForApiCall = async () => {
  try {
    return await auth.currentUser?.getIdToken()
  } catch (error) {
    throw error
  }
}

// TODO make this function accept many claims and it checks them all at once
export const verifyClaim = (user: User | null, claim: string) => {
  if (user) {

    // admin.suppis@nummenpojat.fi is head admin account, so it can interact with suppis even if it's not given permission on custom claims
    if (user.email == "admin.suppis@nummenpojat.fi") {
      return;
    }

    getIdTokenResult(user)
      .then((IdTokenResult) => {
        if (!IdTokenResult.claims[claim]) {
          alert(" Sinulla ei ole oikeuksia Suppikseen\n Jos sinulla @nummenpojat.fi päätteinen email tili yritä uudelleen sillä\n\n Nyt sinut kirjataan ulos")
          signOut()
          location.replace("/login")
        }
      })
  }
}