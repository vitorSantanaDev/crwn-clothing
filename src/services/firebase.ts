import { FirebaseApp, initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
  DocumentReference,
  DocumentData
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

const provider: GoogleAuthProvider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth: Auth = getAuth()

export const sigInWithGooglePopup = (): Promise<UserCredential> =>
  signInWithPopup(auth, provider)

export const sigInWithGoogleRedirect = (): Promise<never> =>
  signInWithRedirect(auth, provider)

export const database: Firestore = getFirestore()

export async function createUserDocumentFromAuth(
  userAuth: User,
  aditionalInformation = {}
): Promise<DocumentReference<DocumentData>> {
  const userDocRef = doc(database, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation
      })
    } catch (error) {
      const err = error as { message: string }
      throw new Error(err.message)
    }
  }

  return userDocRef
}

export async function createUser(
  email: string,
  password: string
): Promise<UserCredential | undefined> {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
