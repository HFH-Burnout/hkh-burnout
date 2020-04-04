import { HatClient } from "@dataswift/hat-js";
import axios from 'axios';

const config = {
    token: "<access-token>",
    apiVersion: 'v2.6',
    secure: true,
    onTokenChange: (newToken) => storeNewToken(newToken)
  };

const hat = new HatClient(config);

const hatDomain = 'testing.hubat.net';
const appId = 'pb-1-dev';
const redirect = 'callback-url';
const fallback = 'fallback-url';

const url = hat.auth().generateHatLoginUrl(hatDomain, appId, redirect, fallback);    
if (url) {
    window.location.href = url;
}   
