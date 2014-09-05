# BudgetSMS

BudgetSMS is a utility module which provides a transport for easy sending of SMS messages via the http://www.budgetsms.net/ website.

## Quick Example

Create a budgetSMS account and fill in the config parameters below.

```javascript
var budgetSMS = require('budgetsms');

var config = {
	"username": "usernameFromBudgetSMS",
	"userid": "useridFromBudgetSMS",
	"handle": "handleFromBudgetSMS",
	"from": "fromnumber"
}

budgetSMS.setConfig(config);
budgetSMS.sendSMS("32*********", "test message", function(err, result) {
  console.log(result);
});

```
