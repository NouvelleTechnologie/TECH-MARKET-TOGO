export const h = (n) => (Number(n) || 0).toLocaleString('fr-FR') + ' FCFA';
export const msgErreur = (e) => {
  const c = e?.code || '';
  if (c.includes('invalid-credential') || c.includes('wrong-password') || c.includes('user-not-found')) return 'Email ou mot de passe incorrect.';
  if (c.includes('email-already-in-use')) return 'Cette adresse email est déjà utilisée.';
  if (c.includes('weak-password')) return 'Le mot de passe doit contenir au moins 6 caractères.';
  if (c.includes('permission-denied')) return 'Action refusée par les règles de sécurité Firebase.';
  if (c.includes('network')) return 'Connexion Internet indisponible.';
  return e?.message || 'Une erreur est survenue.';
};
export const mapsRecherche = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q + ', Togo');
export const waLien = (tel, texte='Bonjour, je vous contacte depuis TECH MARKET TOGO.') => {
  let n = String(tel || '').replace(/\D/g, ''); if (n.length === 8) n = '228' + n;
  return 'https://wa.me/' + n + '?text=' + encodeURIComponent(texte);
};
export const dateFr = (v) => { if (!v) return '—'; const d = v?.toDate ? v.toDate() : new Date(v); return isNaN(d) ? '—' : d.toLocaleDateString('fr-FR'); };
