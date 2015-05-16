/* global
    capitalize: false,
    UserAccounts: false,
    UALog: false,
    UAModule: false
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');


// define the Student class
function UAPassword() {
  // Call the parent constructor
  UAModule.call(this);

  this._id = 'password';
  this.position = 50;
  this.template = 'uaPwd';
  this.templateClass = 'password';
  this.btnTemplate = 'uaPwdBtn';
  this.visible = true;
}


// inherit UAModule
UAPassword.prototype = new UAModule();

_.extend(UAPassword.prototype, {

  // correct the constructor pointer because it points to UAModule
  constructor: UAPassword,

  configure: function(options) {
    // UALog.trace('configure ' + this._id);
    // console.log(options);

    // TODO: pick up password options here
  },

  _fields: [],

  icons: {
  },

  texts: {
    default: {
    },
    signIn: {
    },
    signUp: {
    },
  },

  loginOptions: {},

  fields: function() {
    UALog.trace('fields');
    var self = this;

    var fields = _.chain(self._fields)
      .map(function(field) {
        return {
          _id: field._id,
          position: field.position,
        };
      })
      .sortBy('position')
      .value();

    return fields;
  },
});


UALog.trace('Adding password module');
var password = new UAPassword();
UserAccounts._modules.password = password;
UserAccounts.password = password;
