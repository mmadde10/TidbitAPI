const admin = require('firebase-admin');



exports.list_all_users = function(request, response){
    function listAllUsers(nextPageToken) {
        // List batch of users, 1000 at a time.
        admin.auth().listUsers(1000, nextPageToken)
          .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
                response.send("user", userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
              // List next batch of users.
              listAllUsers(listUsersResult.pageToken)
            }
          })
          .catch(function(error) {
            response.send("Error listing users:", error);
          });
      }
      listAllUsers();
};
exports.create_user = function(request, response){
    admin.auth().createUser({
        email: request.email,
        emailVerified: false,
        phoneNumber: request.phoneNumber,
        password: request.password,
        displayName: request.displayName
      }).then(function(userRecord) {
        response.send("Successfully made user", userRecord.toJSON());
    })
        .catch(function(error) {
            response.json({message:`Error creating new user:${error}`});
    });
};
exports.read_user = function(req, res){
    admin.auth().getUser(uid)
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            response.send("Successfully fetched user", userRecord.toJSON());
        })
        .catch(function(error) {
            response.json({message:`Error fetching user:${error}`});
  });
}
exports.update_user = function(request, response){
    admin.auth().updateUser(request.uid, {
        email: request.email,
        emailVerified: false,
        phoneNumber: request.phoneNumber,
        password: request.password,
        displayName: request.displayName
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          response.send("Successfully updated user", userRecord.toJSON());
        })
        .catch(function(error) {
            response.json({message:`Error creating new user:${error}`});
        });
}
exports.delete_user = function(request, response){
    admin.auth().deleteUser(uid)
    .then(function() {
        response.json({message:`Succesfully deleted user: ${uid}`});
  })
  .catch(function(error) {
        response.send("Error deleting user:", error);
  });
}

exports.create_amp_head = function(request, Response){
      
    res.json({message:'NOT IMPLEMENTED:create_amp_document'});
};
exports.read_amp_head = function(req, res){
    res.json({message:'NOT IMPLEMENTED:read_amp_documents'});
}
exports.update_amp_head = function(req, res){
    res.json({message:'NOT IMPLEMENTED:update_amp_document'});
}
exports.delete_amp_head = function(req, res){
    res.json({message:'NOT IMPLEMENTED:delete_amp_document'});
} 




exports.create_amp_document = function(request, Response){
      
    res.json({message:'NOT IMPLEMENTED:create_amp_document'});
};
exports.read_amp_document = function(req, res){
    res.json({message:'NOT IMPLEMENTED:read_amp_documents'});
}
exports.update_amp_document = function(req, res){
    res.json({message:'NOT IMPLEMENTED:update_amp_document'});
}
exports.delete_amp_document = function(req, res){
    res.json({message:'NOT IMPLEMENTED:delete_amp_document'});
} 