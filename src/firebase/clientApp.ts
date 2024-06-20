import { initializeApp, getApps } from "firebase/app";
export const creatFireBaseApp = () => {
    const clientCreds = {
        apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.PUBLIC_FIREBASE_APP_ID,
    };

    if (getApps().length <= 0) {
        const app = initializeApp(clientCreds);
        return app;
    }
}