import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { userReducer } from './state/user.reducer';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
// import { UserEffects } from './state/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ user: userReducer }),
    // provideEffects([UserEffects])
  ]
};
