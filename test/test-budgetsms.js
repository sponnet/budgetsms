var budgetSMS = require('../lib');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-fs'));

describe('budgetsms', function(done) {

  var path = process.env.configfile || './config.json';
  before(function() {
    expect(path).to.be.a.path("No config.json found in test folder. Copy config.json.test to config.json and fill out your account details before staring a test");
    var config = require(path);
    expect(config).to.have.property('to');
    expect(config).to.have.property('to').not.equal('tonumber');
  });

  it('should send an sms', function(done) {
    budgetSMS.setConfig(config);
    budgetSMS.sendSMS(config.to, config.msg, function(err, result) {
      done();
    });

  });
});