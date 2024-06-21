// import { ServiceAccount } from './../../node_modules/@google-cloud/storage/build/cjs/src/storage.d';
import * as admin from 'firebase-admin'
import config from './config'
import { ServiceAccount } from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(config as ServiceAccount),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    })
}