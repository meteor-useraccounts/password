// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';


var Both = ['client', 'server'];
var Client = 'client';


Package.describe({
  name: 'useraccounts:password',
  summary: 'UserAccounts password package.',
  version: '2.0.0',
  git: 'https://github.com/meteor-useraccounts/password.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // Logger
  api.use([
    'accounts-password',
    'jag:pince@0.0.9',
    'underscore',
    'useraccounts:core@2.0.0'
  ], Both);

  api.imply([
    'accounts-password',
    'useraccounts:core',
  ], Both);


  // Base Class instantiation
  api.addFiles([
    'src/_globals.js',
    'src/logger.js',
    'src/field.js',
    'src/main.js'
  ], Both);


  api.use([
    'templating',
  ], Client);

  api.addFiles([
    'src/templates/ua_pwd.html',
    'src/events.js',
  ], Client);
});
