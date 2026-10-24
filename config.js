// TECH MARKET TOGO — configuration indépendante de DigiCom.
// Remplace les valeurs par celles de TON projet Firebase TECH MARKET.
export const firebaseConfig = {
  apiKey: 'AIzaSyB1RS3Y9lK09TGgIRbvEYyY6rtAv52gCxQ',
  authDomain: 'REMPLACER_PAR_PROJET.firebaseapp.com',
  projectId: 'REMPLACER_PAR_PROJECT_ID',
  appId: 'REMPLACER_PAR_APP_ID'
};
export const PLANS = {
  1: { mois: 1, label: '1 mois', prix: 5000 },
  6: { mois: 6, label: '6 mois', prix: 24000 },
  12: { mois: 12, label: '12 mois', prix: 42000 }
};
export const CATEGORIES = ['Téléphones', 'Informatique', 'Accessoires', 'Électroménager', 'Mode', 'Maison', 'Alimentation', 'Autres'];
export const SPECIALITES = ['Réparation téléphone', 'Réparation ordinateur', 'Déblocage logiciel', 'Récupération de données', 'Réparation électronique', 'Autre'];
export const ROLES = { admin: 'Administrateur', vendeur: 'Vendeur', reparateur: 'Réparateur', acheteur: 'Acheteur' };
export const isFirebaseConfigured = () => firebaseConfig.apiKey !== 'REMPLACER_PAR_API_KEY' && firebaseConfig.projectId !== 'REMPLACER_PAR_PROJECT_ID';
