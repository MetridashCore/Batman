import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
  collection,
  query,
  where,
  arrayUnion,
  runTransaction,
} from 'firebase/firestore'
import { db } from './firebase'
import { updateDoc } from 'firebase/firestore'
import Alert from '@mui/material/Alert'

// import { db } from './firebaseConfig';
import { auth } from './firebase'
// const auth = getAuth(app)

const firestore = db

const googleProvider = new GoogleAuthProvider()

export const readTokens = async (user) => {
  const userRef = doc(firestore, 'users', user.uid)
  const userDoc = await userRef.get()
  const userData = userDoc.data()
  if (userData) {
    return userData.tokens
  }
  return null
}

export const getRealTimeToken = async (user) => {
  let value
  const tokenRef = doc(firestore, 'users', user.uid)
  await onSnapshot(tokenRef, (snapshot) => {
    value = snapshot.data().tokens
  })
  return value

  // if (doc1.exists) {
  //   console.log("this is real time data "+doc1.data().tokens)
  //   return doc1
  // } else {
  //   return null;
  // }
}

export const generateRealTimeToken = (user) => {
  // Get the current user's token
  if (!user) return null
  let token = getUserToken(user)
  const tokenRef = doc(firestore, 'users', user.uid)
  // Listen for changes to the token
  onSnapshot(tokenRef, (newToken) => {
    // Update the token if it has changed
    if (newToken !== token) {
      token = newToken
    }
  })

  // Return the current token
  return token
}

export const getUserToken = async (user) => {
  if (!user) return null

  const tokenRef = doc(firestore, 'users', user.uid)
  const doc1 = await getDoc(tokenRef)

  if (doc1.exists) {
    return doc1.data().tokens
  } else {
    return null
  }
}

export const updateTokens = async (user, newTokenValue) => {
  const userRef = doc(firestore, 'users', user.uid)

  await updateDoc(userRef, { tokens: newTokenValue })
}

export const updateModel = async (user, newModelValue) => {
  const userRef = doc(firestore, 'users', user.uid)
  await updateDoc(userRef, { model: newModelValue })
}
export const addDraft = async (user, data, platform) => {
  const userRef = doc(db, 'users', user.uid)
  const newObject = { draft: data, platform: user }
  const CurrentDate = new Date()

  try {
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      await updateDoc(userRef, {
        draft: arrayUnion({
          draft: data,
          platform: platform,
          date: CurrentDate,
        }),
      })
      ;<Alert severity="success">This is a success alert — check it out!</Alert>
    } else {
      alert('User document not found')
    }
  } catch (error) {
    alert('Error:', error)
    console.log(error)
  }
}

export const fetchUserDrafts = async (user) => {
  const userRef = doc(firestore, 'users', user.uid)

  try {
    const docSnap = await getDoc(userRef)

    if (docSnap.exists()) {
      const userData = docSnap.data()
      const userDrafts = userData.draft || []
      return userDrafts
    } else {
      throw new Error('User document not found')
    }
  } catch (error) {
    throw new Error('Error fetching drafts: ' + error.message)
  }
}

export const createUserWithEmail = async (email, password) => {
  try {
    await runTransaction(firestore, async (transaction) => {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (user.email && user.uid) {
        const userData = {
          email: user.email,
          tokens: 100,
          model: 'text-davinci-002',
          isNewUser: true,
          uid: user.uid,
          drafts: [],
        }
        transaction.set(doc(firestore, 'users', user.uid), userData)
      }
    })
  } catch (e) {
    console.log('failed', e)
  }
}

export const signInWithEmail = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      throw new Error('User does not exist')
    } else {
      throw error
    }
  }
}

export const Logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}

export const signInWithGoogle = async () => {
  try {
    await runTransaction(firestore, async (transaction) => {
      const googleProvider = new GoogleAuthProvider()
      const { user } = await signInWithPopup(auth, googleProvider)

      const userRef = collection(db, 'users')
      const q = query(userRef, where('email', '==', user.email))

      const querySnapshot = await getDocs(q)
      let checkUser = []
      querySnapshot.forEach((doc) => {
        checkUser.push({ id: doc.id, ...doc.data() })
      })

      if (checkUser.length > 0) {
        return
      }

      const userData = {
        email: user.email,
        tokens: 100,
        model: 'text-davinci-002',
        isNewUser: true,
        uid: user.uid,
      }

      transaction.set(doc(firestore, 'users', user.uid), userData, {
        merge: true,
      })
    })

    return user
  } catch (error) {
    console.error('failed:', error)
  }
}

export const onUserSignedIn = async (user, router) => {
  const userDoc = await doc(firestore, 'users', user.uid).get()
  const isNewUser = userDoc.data().isNewUser
  if (isNewUser) {
    router.push('/')
  } else {
    router.push('/')
  }
}
