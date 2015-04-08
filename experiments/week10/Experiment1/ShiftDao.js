var models = require('../models/Models.js');

module.exports = {
    saveShift : function(shift, callback){
        shift.save(function (err) {
            if (err)
            {
                callback("fail");
                return handleError(err);
            }
            else
                callback("success");
        });
    },
};