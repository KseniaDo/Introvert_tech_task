import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIndexedDb, DBConfig } from 'ngx-indexed-db';

import { routes } from './app.routes';

const dbConfig: DBConfig = {
  name: 'DroplistSelect',
  version: 1,
  objectStoresMeta: [{
    store: 'Lists',
    storeConfig: {keyPath: 'id', autoIncrement: true},
    storeSchema: [
      { name: 'nameElement', keypath: 'nameElement', options: { unique: false}},
      { name: 'isOpen', keypath: 'isOpen', options: { unique: false}},
      { name: 'isSelect', keypath: 'isSelect', options: { unique: false}},
      { name: 'subSelect', keypath: 'subSelect', options: { unique: false}},
    ],
  }],
}

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(), provideIndexedDb(dbConfig), provideRouter(routes)]
};
