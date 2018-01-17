'use strict';
const functions = require('firebase-functions');
const express = require('express');
const app = express();


module.exports = function(app) {

    /*
    app.get('test2', (request, response) => {
        response.send('Test');
    });
    */
    app.route('/test2')
        .get(function(request, response){
            response.send('Test');
        });
}

