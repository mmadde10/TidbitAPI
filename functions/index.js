const functions = require('firebase-functions');
var bodyParser = require('body-parser');
const express = require('express');
var app = express();

//TODO: CLEAN THIS UP

//Admin
const admin = require('firebase-admin');
var serviceAccount = require('./secure/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://tidbit-f2667.firebaseio.com'
});
app.route('/')
        .get(function(request, response){
        response.json({message:'Welcome to TidbitAPI!'});
});


/*

AMP Routes


*/
app.route('/amp')
        .get(function(request, response){
        response.json({message:'CRUD AMP DOCUMENTS HERE!'});
});


var ampController = require('./api/controllers/ampController');

app.route('/amp/document')
    .get(ampController.list_all_amp_documents)
    .post(ampController.create_amp_document);

app.route('/amp/document/:ampDocumentId')
    .get(ampController.read_amp_document)
    .put(ampController.update_amp_document)
    .delete(ampController.delete_amp_document);

app.route('/amp/head/')
    .get(ampController.list_all_amp_heads)
    .post(ampController.create_amp_heads);

app.route('/amp/body/')
    .get(ampController.list_all_amp_body)  
    .post(ampController.create_amp_body);

app.route('/amp/head/:ampHeadId')
    .get(ampController.read_amp_head)
    .put(ampController.update_amp_head)
    .delete(ampController.delete_amp_head);

app.route('/amp/body/:ampBodyId')
    .get(ampController.read_amp_body)
    .put(ampController.update_amp_body)
    .delete(ampController.delete_amp_body);

app.route('/amp/img/')
    .get(ampController.list_all_amp_img)  
    .post(ampController.create_amp_img);

app.route('/amp/img/:ampImgId')
    .get(ampController.read_amp_img)
    .put(ampController.update_amp_img)
    .delete(ampController.delete_amp_img);

app.route('/amp/paragraph/')
    .get(ampController.list_all_amp_Paragraph)  
    .post(ampController.create_amp_Paragraph);

app.route('/amp/paragraph/:ampParagraphId')
    .get(ampController.read_amp_Paragraph)
    .put(ampController.update_amp_Paragraph)
    .delete(ampController.delete_amp_Paragraph);    


exports.app = functions.https.onRequest(app);
