import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    type User,
} from 'firebase/auth'
import {
    doc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    addDoc,
    collection,
    query,
    where,
    limit,
    arrayUnion,
    FirestoreError,
    type FirestoreDataConverter,
} from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import { auth, db } from './firebase'

const googleProvider = new GoogleAuthProvider()

interface UserDoc {
    email: string | null
    tokens: number
    model: string
    isNewUser: boolean
    uid: string
    // Stored entries use `date`, while the Draft types in the UI expect `time`.
    draft?: any[]
}

const userConverter: FirestoreDataConverter<UserDoc> = {
    toFirestore: (data) => data,
    fromFirestore: (snapshot) => snapshot.data() as UserDoc,
}

const userRef = (user: User | null) => {
    if (!user) throw new Error('User not signed in')
    return doc(db, 'users', user.uid).withConverter(userConverter)
}

export const waitList = async (email: string) => {
    await addDoc(collection(db, 'waitList'), {
        email: email,
        createdAt: new Date().toDateString(),
    })
}

export const getUserToken = async (user: User | null) => {
    if (!user) return null

    const snapshot = await getDoc(userRef(user))
    return snapshot.exists() ? snapshot.data().tokens : null
}

export const updateTokens = async (
    user: User | null,
    newTokenValue: number
) => {
    await updateDoc(userRef(user), { tokens: newTokenValue })
}

export const updateModel = async (user: User | null, newModelValue: string) => {
    await updateDoc(userRef(user), { model: newModelValue })
}

export const addDraft = async (
    user: User | null,
    data: string,
    platform: string
) => {
    const ref = userRef(user)

    try {
        await updateDoc(ref, {
            draft: arrayUnion({ draft: data, platform, date: new Date() }),
        })
    } catch (error) {
        if (error instanceof FirestoreError && error.code === 'not-found') {
            alert('User document not found')
        } else {
            alert('Error occured')
            console.log(error)
        }
    }
}

export const fetchUserDrafts = async (user: User | null) => {
    const ref = userRef(user)

    try {
        const snapshot = await getDoc(ref)
        if (!snapshot.exists()) throw new Error('User document not found')
        return snapshot.data().draft || []
    } catch (error) {
        throw new Error('Error fetching drafts: ' + (error as Error).message)
    }
}

export const createUserWithEmail = async (email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    if (user.email) {
        const userData = {
            email: user.email,
            tokens: 100,
            model: 'text-davinci-002',
            isNewUser: true,
            uid: user.uid,
            drafts: [],
        }
        await setDoc(userRef(user), userData)
    }
}

export const signInWithEmail = async (email: string, password: string) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        if (
            error instanceof FirebaseError &&
            error.code === 'auth/user-not-found'
        ) {
            throw new Error('User does not exist')
        }
        throw error
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
    const { user } = await signInWithPopup(auth, googleProvider)

    const existingUsers = await getDocs(
        query(
            collection(db, 'users'),
            where('email', '==', user.email),
            limit(1)
        )
    )
    if (!existingUsers.empty) return

    const userData = {
        email: user.email,
        tokens: 100,
        model: 'text-davinci-002',
        isNewUser: true,
        uid: user.uid,
    }
    await setDoc(userRef(user), userData, { merge: true })
    return user
}
