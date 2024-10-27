declare global {
    namespace NodeJS {
        interface ProcessEnv {
            readonly OPENAI_API_KEY: string
            readonly GOOGLE_CLIENT_ID: string
            readonly GOOGLE_CLIENT_SECRET: string
            readonly NEXTAUTH_URL: string
            readonly NEXTAUTH_SECRET: string
            readonly NEXT_PUBLIC_JWT_SECRET: string
            readonly NEXT_PUBLIC_FIREBASE_API_KEY: string
            readonly NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string
            readonly NEXT_PUBLIC_FIREBASE_PROJECT_ID: string
            readonly NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string
            readonly NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string
            readonly NEXT_PUBLIC_FIREBASE_APP_ID: string
            readonly NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string
            readonly NEXT_TELEMETRY_DISABLED: string
        }
    }
}

export {}
