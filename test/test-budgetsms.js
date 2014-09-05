var budgetSMS = require('../lib');
var chai = require('chai');
var expect = chai.expect;

describe('budgetsms', function(done) {

  var config = require(process.env.configfile || './config.json');
  before(function() {
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