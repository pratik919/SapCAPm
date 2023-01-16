// const express = require('express');
const rp = require('request-promise');
const xsenv = require('@sap/xsenv');

const dest_service = xsenv.getServices({ dest: { tag: 'destination' } }).dest;
const uaa_service = xsenv.getServices({ uaa: { tag: 'xsuaa' } }).uaa;
const sUaaCredentials = dest_service.clientid + ':' + dest_service.clientsecret;
const sDestinationName = 'CdsData';


exports.getJwt = async (req, res, next) => {
    try{
    const oAuthPost = await rp({
        uri: uaa_service.url + '/oauth/token',
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(sUaaCredentials).toString('base64'),
            'Content-type': 'application/x-www-form-urlencoded'
        },
        form: {
            'client_id': dest_service.clientid,
            'grant_type': 'client_credentials'
        }
    });
    const dest = await rp({
        // const token = JSON.parse(data).access_token;
        
            uri: dest_service.uri + '/destination-configuration/v1/destinations/' + sDestinationName,
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(oAuthPost).access_token
            }
        
    });
    res.locals.myvalue = JSON.parse(dest);
} catch (error){
    res.status(500).json({
        status: 'fail',
        message: error
      });
}
next();
};