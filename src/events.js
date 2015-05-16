/* global
    UserAccounts: false
*/
'use strict';

var atPwdEvents = {
  "click .ua-pwd-btn": function(event, t) {
    event.preventDefault();
    event.currentTarget.blur();

    if (UserAccounts.disabled()) {
      return;
    }
  }
};

Template.uaForm.events(atPwdEvents);
