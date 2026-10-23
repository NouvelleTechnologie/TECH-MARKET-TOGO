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
