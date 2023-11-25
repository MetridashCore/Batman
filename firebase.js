import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getRemoteConfig } from 'firebase/remote-config'
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

let app
if (!getApps().length) {
    app = initializeApp(firebaseConfig)
} else {
    app = getApp()
}

let remoteConfigVar
if (typeof window !== 'undefined') {
    remoteConfigVar = getRemoteConfig(app)
    remoteConfigVar.settings.minimumFetchIntervalMillis = 100000
}
const remoteConfig = remoteConfigVar
const auth = getAuth(app)
const database = getDatabase(app)

const db = getFirestore(app)
export { auth, database, db, firebaseConfig, remoteConfig, app }
