'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var CredentialListList = require('./sip/credentialList').CredentialListList;
var DomainList = require('./sip/domain').DomainList;
var IpAccessControlListList = require(
    './sip/ipAccessControlList').IpAccessControlListList;

var SipList;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipList
 * @description Initialize the SipList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
SipList = function SipList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function sip
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext}
   */
  /* jshint ignore:end */
  function SipListInstance(sid) {
    return SipListInstance.get(sid);
  }

  SipListInstance._version = version;
  // Path Solution
  SipListInstance._solution = {
    accountSid: accountSid
  };

  // Components
  SipListInstance._domains = undefined;
  SipListInstance._regions = undefined;
  SipListInstance._ipAccessControlLists = undefined;
  SipListInstance._credentialLists = undefined;

  Object.defineProperty(SipListInstance,
    'domains', {
    get: function domains() {
      if (!this._domains) {
        this._domains = new DomainList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._domains;
    }
  });

  Object.defineProperty(SipListInstance,
    'ipAccessControlLists', {
    get: function ipAccessControlLists() {
      if (!this._ipAccessControlLists) {
        this._ipAccessControlLists = new IpAccessControlListList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._ipAccessControlLists;
    }
  });

  Object.defineProperty(SipListInstance,
    'credentialLists', {
    get: function credentialLists() {
      if (!this._credentialLists) {
        this._credentialLists = new CredentialListList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._credentialLists;
    }
  });

  return SipListInstance;
};

module.exports = {
  SipList: SipList
};
