// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//configuración de acceso a Firebase

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyClNEMONitr0oYI58XgbnloDSXfgjB8zHc',
    authDomain: 'angularfirebase-1248f.firebaseapp.com',
    databaseURL: 'https://angularfirebase-1248f.firebaseio.com',
    projectId: 'angularfirebase-1248f',
    storageBucket: 'angularfirebase-1248f.appspot.com',
    messagingSenderId: '171996667771',
    appId: '1:171996667771:web:aa42bdb04a250733bc27de'
  },
  title: 'AngularFirebaseProyect!'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
