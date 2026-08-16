import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseAppletConfig from '../../firebase-applet-config.json';

export const firebaseConfig = firebaseAppletConfig;

// Only initialize on the client
export const app = typeof window !== 'undefined' 
  ? (!getApps().length ? initializeApp(firebaseConfig) : getApp()) 
  : undefined as any;

export const firestore = typeof window !== 'undefined' ? getFirestore(app) : undefined as any;
export const auth = typeof window !== 'undefined' ? getAuth(app) : undefined as any;
