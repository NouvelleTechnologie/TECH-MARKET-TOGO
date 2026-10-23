import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { jsx as J } from 'react/jsx-runtime';
import App from './app.js';
import { AuthProvider } from './authcontext.js';
createRoot(document.getElementById('root')).render(J(HashRouter, { children: J(AuthProvider, { children: J(App, {}) }) }));
