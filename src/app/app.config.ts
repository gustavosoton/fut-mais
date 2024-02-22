import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyAFV8jRdARdaGxsU-ET_5gQkm2Gzf75bGE',
          authDomain: 'futmais-7da3f.firebaseapp.com',
          databaseURL: 'https://futmais-7da3f-default-rtdb.firebaseio.com',
          projectId: 'futmais-7da3f',
          storageBucket: 'futmais-7da3f.appspot.com',
          messagingSenderId: '476442590443',
          appId: '1:476442590443:web:246aa3c2bf0210723f52ae',
          measurementId: 'G-S61P40S58C',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    provideAnimationsAsync(),
  ],
};
