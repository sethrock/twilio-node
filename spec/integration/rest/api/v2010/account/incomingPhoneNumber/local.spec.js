'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Local', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers
                                    .local.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/Local.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Local.json?PageSize=1&Page=0',
          'incoming_phone_numbers': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address_requirements': 'none',
                  'api_version': '2010-04-01',
                  'beta': null,
                  'capabilities': {
                      'mms': true,
                      'sms': false,
                      'voice': true
                  },
                  'date_created': 'Thu, 30 Jul 2015 23:19:04 +0000',
                  'date_updated': 'Thu, 30 Jul 2015 23:19:04 +0000',
                  'friendly_name': '(808) 925-5327',
                  'phone_number': '+18089255327',
                  'origin': 'origin',
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_application_sid': '',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_method': 'POST',
                  'sms_url': '',
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'trunk_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_application_sid': '',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null
              }
          ],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Local.json?PageSize=1&Page=2',
          'next_page_uri': null,
          'num_pages': 3,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'total': 3,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Local.json?PageSize=1'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers
                                    .local.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Local.json?PageSize=1&Page=0',
          'incoming_phone_numbers': [],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Local.json?PageSize=1&Page=2',
          'next_page_uri': null,
          'num_pages': 3,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'total': 3,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Local.json?PageSize=1'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers
                                    .local.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        phoneNumber: '+987654321'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers
                                    .local.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/IncomingPhoneNumbers/Local.json')(solution);

      var values = {
        PhoneNumber: '+987654321',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_requirements': 'none',
          'api_version': '2010-04-01',
          'beta': false,
          'capabilities': {
              'mms': true,
              'sms': false,
              'voice': true
          },
          'date_created': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'date_updated': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'friendly_name': '(808) 925-5327',
          'phone_number': '+18089255327',
          'origin': 'origin',
          'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_application_sid': '',
          'sms_fallback_method': 'POST',
          'sms_fallback_url': '',
          'sms_method': 'POST',
          'sms_url': '',
          'status_callback': '',
          'status_callback_method': 'POST',
          'trunk_sid': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_application_sid': '',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_url': null
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        phoneNumber: '+987654321'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers
                                    .local.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

