import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {environment} from "../environments/environment.development";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"lab5-33f9f","appId":"1:548834777217:web:f3ed6919c7c32b8dbc1580","storageBucket":"lab5-33f9f.appspot.com","apiKey":"AIzaSyCQ9NN8FlR4JTrVm7qXJDr7QCD2-AlekC4","authDomain":"lab5-33f9f.firebaseapp.com","messagingSenderId":"548834777217","measurementId":"G-ML01E3W572"})), provideFirestore(() => getFirestore())
  ]
};
