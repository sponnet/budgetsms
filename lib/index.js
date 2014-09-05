var http = require('http');
var _config = {};

module.exports = {

	setConfig: function(config) {
		_config = config;
	},

	sendSMS: function(to, msg, cb) {

		_config.to = to;
		_config.msg = msg;

		var path = '/api/sendsms_utf8/?';
		for (var k in _config) {
			if (_config.hasOwnProperty(k)) {
				path += k + "=" + encodeURIComponent(_config[k]) + "&";
			}

		}

		var options = {
			hostname: 'www.budgetsms.net',
			port: 80,
			path: path,
			method: 'GET'
		};

		console.log(path);

		var req = http.request(options, function(res) {
			res.on('data', function(chunk) {
				console.log('BODY: ' + chunk);
				cb(null, chunk);
			});
		});

		req.on('error', function(e) {
			console.log('problem with request: ' + e.message);
			cb(e);
		});
		req.end();

		delete _config.to;
		delete _config.msg;


	}

};