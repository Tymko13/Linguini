import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCleXH8xYnrbe7HYlUcoVyUFEYofLwHM2A",
  authDomain: "angular-linguini.firebaseapp.com",
  projectId: "angular-linguini",
  storageBucket: "angular-linguini.firebasestorage.app",
  messagingSenderId: "789138574647",
  appId: "1:789138574647:web:49d1c0446daa9ecfc89eb2"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
