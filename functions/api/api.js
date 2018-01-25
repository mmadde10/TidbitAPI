const express = require('express');
var app = express();
const admin = require('firebase-admin');
var db = admin.database();

var adminUser = require('./controllers/adminController');

module.exports = function initRestApi (app){

    app.route('/')
        .get(function(request, response){
        response.json({message:'Welcome to Admin TidbitAPI!'});
    });

    app.route('/admin/users')
        .get(adminUser.list_all_users)
        .post(adminUser.create_user);

    app.route('admin/users/:userId')
        .get(adminUser.read_user)
        .put(adminUser.update_user)
        .delete(adminUser.delete_user);



    //AMP Head    

    app.post('/amp/ampHead', (req, res) => {
        const ampHead = req.body.ampHead;
        const data = {
            date: ampHead.date,
            createdAt: ampHead.createdDate,
            ampStyle: ampHead.ampStyle,
            canonicalLink: ampHead.canonicalLink
        };
        return admin.database().ref(`/users/${req.user.uid}/amp/ampHead`).push(data);
        }).then(snapshot => {
            return snapshot.ref.once('value');
        }).then(snapshot => {
            const val = snapshot.val();
            res.status(201).json({message: val.message, category: val.category});
        }).catch(error => {
            console.log('Error detecting sentiment or saving message', error.message);
            res.sendStatus(500);
        });


    app.get('/amp/ampHead/:ampHeadId', (req, res) => {
    const ampHeadId = req.params.ampHeadId;
        db.ref(`/users/${req.user.uid}/amp/ampHead/${ampHeadId}`).once('value').then(snapshot => {
            if (snapshot.val() !== null) {
                // Cache details in the browser for 5 minutes
                res.set('Cache-Control', 'private, max-age=300');
                res.status(200).json(snapshot.val());
            } 
            else {
                res.status(404).json({errorCode: 404, errorMessage: `message '${ampHeadId}' not found`});
            }
        }).catch(error => {
            console.log('Error getting message details', ampHeadId, error.message);
            res.sendStatus(500);
        });
    });
    app.put('/amp/ampHead/:ampHeadId', (req, res) => {
        const ampHeadId = req.params.ampHeadId;
        const data = {
            date: ampHead.date,
            createdAt: ampHead.createdDate,
            ampStyle: ampHead.ampStyle,
            canonicalLink: ampHead.canonicalLink
        };
        return admin.database().ref(`/users/${req.user.uid}/amp/ampHead`).push(data);
        }).then(snapshot => {
            return snapshot.ref.once('value');
        }).then(snapshot => {
            const val = snapshot.val();
            res.status(201).json({message: val.message, category: val.category});
        }).catch(error => {
            console.log('Error detecting sentiment or saving message', error.message);
            res.sendStatus(500);
    });


    //Amp Body




    app.post('/amp/ampBody', (req, res) => {
        const ampBody = req.body.ampBody;
        const data = {
            date: ampBody.date,
            createdAt: ampBody.createdDate,
            ampStyle: ampBody.ampStyle,
            canonicalLink: ampBody.canonicalLink
        };
        return admin.database().ref(`/users/${req.user.uid}/amp/ampBody`).push(data);
        }).then(snapshot => {
            return snapshot.ref.once('value');
        }).then(snapshot => {
            const val = snapshot.val();
            res.status(201).json({message: val.message, category: val.category});
        }).catch(error => {
            console.log('Error detecting sentiment or saving message', error.message);
            res.sendStatus(500);
        });


    app.get('/amp/ampBody/:ampBodyId', (req, res) => {
    const ampBodyId = req.params.ampBodyId;
        db.ref(`/users/${req.user.uid}/amp/ampBody/${ampBodyId}`).once('value').then(snapshot => {
            if (snapshot.val() !== null) {
                // Cache details in the browser for 5 minutes
                res.set('Cache-Control', 'private, max-age=300');
                res.status(200).json(snapshot.val());
            } 
            else {
                res.status(404).json({errorCode: 404, errorMessage: `message '${ampBodyId}' not found`});
            }
        }).catch(error => {
            console.log('Error getting message details', ampBodyId, error.message);
            res.sendStatus(500);
        });
    });
    app.put('/amp/ampBody/:ampBodyId', (req, res) => {
        const ampBodyId = req.params.ampBodyId;
        const data = {
            date: ampBody.date,
            createdAt: ampBody.createdDate,
            ampStyle: ampBody.ampStyle,
            canonicalLink: ampBody.canonicalLink
        };
        return admin.database().ref(`/users/${req.user.uid}/amp/ampBody`).push(data);
        }).then(snapshot => {
            return snapshot.ref.once('value');
        }).then(snapshot => {
            const val = snapshot.val();
            res.status(201).json({message: val.message, category: val.category});
        }).catch(error => {
            console.log('Error detecting sentiment or saving message', error.message);
            res.sendStatus(500);
    });


    // AMP Image


    app.post('/amp/ampImage', (req, res) => {
        const ampImage = req.body.ampImage;
        const data = {
            name: ampImage.name,
            source: ampImage.source,
            width: ampImage.width,
            height: ampImage.height,
            layout: ampImage.layout
        };
        return admin.database().ref(`/users/${req.user.uid}/amp/ampImage`).push(data);
        }).then(snapshot => {
            return snapshot.ref.once('value');
        }).then(snapshot => {
            const val = snapshot.val();
            res.status(201).json({message: val.message, category: val.category});
        }).catch(error => {
            console.log('Error detecting sentiment or saving message', error.message);
            res.sendStatus(500);
        });

    app.get('/amp/ampImage/:ampImageId', (req, res) => {
        const ampBodyId = req.params.ampBodyId;
            db.ref(`/users/${req.user.uid}/amp/ampImage/${ampImageId}`).once('value').then(snapshot => {
                if (snapshot.val() !== null) {
                    // Cache details in the browser for 5 minutes
                    res.set('Cache-Control', 'private, max-age=300');
                    res.status(200).json(snapshot.val());
                } 
                else {
                    res.status(404).json({errorCode: 404, errorMessage: `message '${ampBodyId}' not found`});
                }
            }).catch(error => {
                console.log('Error getting message details', ampImageId, error.message);
                res.sendStatus(500);
            });
        });
    app.put('/amp/ampImage/:ampImageId', (req, res) => {
        const ampImage = req.body.ampImage;
        const data = {
            name: ampBody.name,
            source: ampBody.source,
            width: ampBody.width,
            height: ampBody.height,
            layout: ampBody.layout
        };
        return admin.database().ref(`/users/${req.user.uid}/amp/ampImage`).push(data);
        }).then(snapshot => {
            return snapshot.ref.once('value');
        }).then(snapshot => {
            const val = snapshot.val();
            res.status(201).json({message: val.message, category: val.category});
        }).catch(error => {
            console.log('Error detecting sentiment or saving message', error.message);
            res.sendStatus(500);
        });

        //AMP paragraph

    app.get('/amp/ampParagraph/:ampParagraphId', (req, res) => {
        const ampParagraphId = req.params.ampParagraphId;
            db.ref(`/users/${req.user.uid}/amp/ampParagraph/${ampParagraphId}`).once('value').then(snapshot => {
                if (snapshot.val() !== null) {
                    // Cache details in the browser for 5 minutes
                    res.set('Cache-Control', 'private, max-age=300');
                    res.status(200).json(snapshot.val());
                } 
                else {
                    res.status(404).json({errorCode: 404, errorMessage: `message '${ampParagraphId}' not found`});
                }
            }).catch(error => {
                console.log('Error getting message details', ampBodyId, error.message);
                res.sendStatus(500);
            });
        });

        app.post('/amp/ampParagraph', (req, res) => {
            const ampParagraph = req.body.ampParagraph;
            const data = {
                header: ampParagraph.header,
                paragraph: ampParagraph.paragraph
            };
            return admin.database().ref(`/users/${req.user.uid}/amp/ampParagraph`).push(data);
            }).then(snapshot => {
                return snapshot.ref.once('value');
            }).then(snapshot => {
                const val = snapshot.val();
                res.status(201).json({message: val.message, category: val.category});
            }).catch(error => {
                console.log('Error detecting sentiment or saving message', error.message);
                res.sendStatus(500);
            });    
}