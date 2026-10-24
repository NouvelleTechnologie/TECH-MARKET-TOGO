// TECH MARKET TOGO — configuration indépendante de DigiCom.
// Remplace les valeurs par celles de TON projet Firebase TECH MARKET.

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

export const PLANS = {
  1: { mois: 1, label: '1 mois', prix: 5000 },
  6: { mois: 6, label: '6 mois', prix: 24000 },
  12: { mois: 12, label: '12 mois', prix: 42000 }
};
export const CATEGORIES = ['Téléphones', 'Informatique', 'Accessoires', 'Électroménager', 'Mode', 'Maison', 'Alimentation', 'Autres'];
export const SPECIALITES = ['Réparation téléphone', 'Réparation ordinateur', 'Déblocage logiciel', 'Récupération de données', 'Réparation électronique', 'Autre'];
export const ROLES = { admin: 'Administrateur', vendeur: 'Vendeur', reparateur: 'Réparateur', acheteur: 'Acheteur' };
export const isFirebaseConfigured = () => firebaseConfig.apiKey !== 'export const PLANS = {
  1: { mois: 1, label: '1 mois', prix: 5000 },
  6: { mois: 6, label: '6 mois', prix: 24000 },
  12: { mois: 12, label: '12 mois', prix: 42000 }
};
export const CATEGORIES = ['Téléphones', 'Informatique', 'Accessoires', 'Électroménager', 'Mode', 'Maison', 'Alimentation', 'Autres'];
export const SPECIALITES = ['Réparation téléphone', 'Réparation ordinateur', 'Déblocage logiciel', 'Récupération de données', 'Réparation électronique', 'Autre'];
export const ROLES = { admin: 'Administrateur', vendeur: 'Vendeur', reparateur: 'Réparateur', acheteur: 'Acheteur' };
export const isFirebaseConfigured = () => firebaseConfig.apiKey !== 'AIzaSyB1RS3Y9lK09TGgIRbvEYyY6rtAv52gCxQ' && firebaseConfig.projectId !== 'tech-market-togo';


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
