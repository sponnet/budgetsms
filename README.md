# BudgetSMS

BudgetSMS is a utility module which provides a transport for easy sending of SMS messages via the BudgetSMS website.

## Quick Examples

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
