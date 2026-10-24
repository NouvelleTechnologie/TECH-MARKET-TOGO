import { createContext, useContext, useEffect, useState } from 'react';
import { jsx as J } from 'react/jsx-runtime';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase.js';
const C = createContext({ user:null, profile:null, loading:true, refresh:async()=>{} });
export const useAuth = () => useContext(C);
export function AuthProvider({ children }) {
  const [user,setUser] = useState(null); const [profile,setProfile] = useState(null); const [loading,setLoading] = useState(true);
  const refresh = async (u=user) => {
    if (!u || !db) { setProfile(null); return; }
    const snap = await getDoc(doc(db,'users',u.uid)); setProfile(snap.exists() ? { uid:u.uid, ...snap.data() } : null);
  };
  useEffect(() => {
    if (!auth) { setLoading(false); return; }
    return onAuthStateChanged(auth, async u => { setUser(u); try { await refresh(u); } catch(e) { setProfile(null); } finally { setLoading(false); } });
  }, []);
  return J(C.Provider, { value:{user,profile,loading,refresh}, children });
}

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1RS3Y9lK09TGgIRbvEYyY6rtAv52gCxQ",
  authDomain: "tech-market-togo.firebaseapp.com",
  projectId: "tech-market-togo",
  storageBucket: "tech-market-togo.firebasestorage.app",
  messagingSenderId: "592766003868",
  appId: "1:592766003868:web:53fba794dd88e2bf235b59",
  measurementId: "G-DQW9ZC7YJ9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
