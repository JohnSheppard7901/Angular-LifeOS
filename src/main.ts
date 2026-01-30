import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//bootstrapApplication means starting the application

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
