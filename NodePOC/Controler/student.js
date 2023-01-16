const express = require('express');
const rp = require('request-promise');
// const xsenv = require('@sap/xsenv');


// const dest_service = xsenv.getServices({ dest: { tag: 'destination' } }).dest;

exports.getAllStudent = (req, res) => {
    const endpoint = "/my-school/Student";
        const oDestination = res.locals.myvalue;
        const token = oDestination.authTokens[0];
        return rp({
            method: 'GET',
            uri: oDestination.destinationConfiguration.URL + endpoint,
            headers: {
                'Authorization': `${token.type} ${token.value}`
            }}).then((result) => {
              res.setHeader('Content-Type', 'application/json').status(200).send(result);
          }).catch((error) => {
              res.setHeader('Content-Type', 'application/json').status(500).send("error: " + JSON.stringify(error));
          });
};

exports.getStudent = (req, res) => {
    const id = req.params.id ;
    const endpoint = "/my-school/Student/" + id;
    const oDestination = res.locals.myvalue;
    const token = oDestination.authTokens[0];
    return rp({
        method: 'GET',
        uri: oDestination.destinationConfiguration.URL + endpoint,
        headers: {
            'Authorization': `${token.type} ${token.value}`
        }}).then((result) => {
        res.setHeader('Content-Type', 'application/json').status(200).send(result);
    }).catch((error) => {
        res.setHeader('Content-Type', 'application/json').status(500).send("error: " + JSON.stringify(error));
    });

};

exports.postStudent = (req, res) => {
    const endpoint = "/my-school/Student";
    const bodyData = req.body;
        const oDestination = res.locals.myvalue;
        const token = oDestination.authTokens[0];
        return rp({
            method: 'POST',
            uri: oDestination.destinationConfiguration.URL + endpoint,
            headers: {
                'Authorization': `${token.type} ${token.value}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
    }).then((result) => {
        res.setHeader('Content-Type', 'application/json').status(200).send(result);
    }).catch((error) => {
        res.setHeader('Content-Type', 'application/json').send(error);
    });
};

exports.patchStudent = (req, res) => {
    const id = req.params.id ;
    const endpoint = "/my-school/Student/" + id;
    const bodyData = req.body;
        const oDestination = res.locals.myvalue;
        const token = oDestination.authTokens[0];
        return rp({
            method: 'PATCH',
            uri: oDestination.destinationConfiguration.URL + endpoint,
            headers: {
                'Authorization': `${token.type} ${token.value}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
    }).then((result) => {
        res.setHeader('Content-Type', 'application/json').status(200).send(result);
    }).catch((error) => {
        res.setHeader('Content-Type', 'application/json').send(error);
    });
};

