// To make firebase running (the app contain every utilities necessary for firebase to run)
// to get in we need initializeApp : create an App instance for me based on some type of config
// This config is an object that allow us to attached this firebase instance to the instance we have online
// It permit to say to firebase that we want to refer the instance created inside firebase console online
// so we clicked on <> in firebase website and register our web app: FoodCare-web-app
// CRUD can happen using this firebase app instance that is a librairy with multiple functions and so on
import { initializeApp } from 'firebase/app'

// We also need access to the micro-librairy for authentication tools, getAuth is a auth instance
import {
    getAuth,
    signInWithPopup, GoogleAuthProvider, signInWithRedirect
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXrZHYL2nnHazv-m297sxCPxOIIh4-Kwc",
    authDomain: "foodcare-f50db.firebaseapp.com",
    projectId: "foodcare-f50db",
    storageBucket: "foodcare-f50db.appspot.com",
    messagingSenderId: "465752676826",
    appId: "1:465752676826:web:cc78e5e4d953c04db688e3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// We need a provider to give us  back the provider instance GoogleAuthProvider

const provider = new GoogleAuthProvider(); //  GoogleAuth... this is a class 

// FROM GoogleAuthProvider
// The method here take an object as parameter and we choose options:
// prompt: "select_account" mean that every time user interact with our Auth Provider, we force them to select an account
provider.setCustomParameters({
    prompt: "select_account"
});

// from firebase/auth:
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
// Now we need to set things in firebase (in sign-in method in Authentication) => provide hability to sign with Google

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectstoAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectstoAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('batch is sent');
};   

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        accumulator[title.toLowerCase()] = items;
        return accumulator
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // I want to check if this data exists
    // if it exist I just return the userDocRef so i do nothing else
    // if not : I create / set the document with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        // fields inside userAuth object in the browser console: we extract through destructuration these two fields.
        const { displayName, email } = userAuth;
        // to know when the user is sign in : 
        const createdAt = new Date();
        // Asynchronously if there is no error we set the document we get before and pass to it the values in 2nd argument
        try {
            await setDoc(userDocRef, { displayName, email, createdAt })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;

}


