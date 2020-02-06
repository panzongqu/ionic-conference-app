'use strict';

const builder = require('electron-builder');

builder
  .build({
    mac: ['mas'],
    linux: ['snap'],
    win: ['appx'],
    config: {
      appId: 'com.ionic.conference.app.desktop2',
      productName: 'IonicConferenceApp',
      afterPack: './electron/afterPack.js',
      files: [
        './electron/main.js',
        './package.json',
        './www/**/*',
        './build',
        '!./node_modules/.cache/',
        '!./**/*.map'
      ],
      mac: {
        category: 'public.app-category.Utility',
        icon: 'resources/ionicframework/mac/app.icns',
        artifactName: 'IonicConferenceApp.pkg',
        darkModeSupport: false,
        target: ['mas']
      },
      mas: {
        identity: 'IonicConferenceApp',
      },
      win: {
        target: ['appx'],
        icon: 'resources/ionicframework/windows/icon.ico',
        artifactName: 'IonicConferenceApp.appx'
      },
      appx: {
        identityName: 'IonicConferenceAppforWindows',
        applicationId: 'IonicConferenceAppforWindows',
        displayName: 'IonicConferenceApp for Windows'
      },
      linux: {
        target: ['snap'],
        category: 'public.app-category.Utility',
        artifactName: 'IonicConferenceApp-linux.snap'

      }
    }
  })
  .then(() => {
    // handle result
    console.log('Build OK!');
  })
  .catch(error => {
    // handle error
    console.log(error);
  });
