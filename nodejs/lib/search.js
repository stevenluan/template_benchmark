var fs = require('fs'), _xml = fs.readFileSync(__dirname + '/finditems.xml', 'utf-8'), xml2js = require('xml2js'), request = require('request');
var Search = module.exports = function() {

}

Search.prototype = {
	finditems : function(next) {
		var requestOptions = {
			'uri' : 'http://finditemservice.vip.phx.ebay.com/services/search/FindItemServiceNextGen/v1',
			'method' : 'POST',
			'body' : _xml,
			'headers' : {
				'Content-Type' : 'application/soap+xml; charset=utf-8',

				'X-EBAY-SOA-OPERATION-NAME' : 'findItems',

				'X-EBAY-SOA-SERVICE-NAME' : 'FindItemServiceNextGen',

				'X-EBAY-SOA-MESSAGE-PROTOCOL' : 'SOAP11',
				'X-EBAY-SOA-CONSUMER-ID' : 'ebaysjinternal'
			}
		}
		console.time('fisng');
		request(requestOptions, function(error, response, body) {
			var parser = new xml2js.Parser();
			parser.addListener('end', function(result) {
				next(result);
			});
			if (body) {
				parser.parseString(body);
			}
			console.timeEnd('fisng');
		});
	}
}
