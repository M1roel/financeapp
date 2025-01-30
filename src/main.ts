import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"financeapp-ae3f4","appId":"1:779509874066:web:3e45a45ebf9fcef4d1954b","storageBucket":"financeapp-ae3f4.firebasestorage.app","apiKey":"AIzaSyCqPhWMqujwbsPY9zLYmmlK4dOd_h90A0U","authDomain":"financeapp-ae3f4.firebaseapp.com","messagingSenderId":"779509874066"}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
}).catch((err) => console.error(err));
