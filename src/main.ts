import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import { appConfig } from './app/app.config';
import { getDatabase } from 'firebase/database';
import { provideDatabase } from '@angular/fire/database';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Mantiene las rutas y la configuración de la app
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase())
  ]
}).catch(err => console.error(err));
