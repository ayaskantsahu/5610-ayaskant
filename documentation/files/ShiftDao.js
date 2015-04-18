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
    
    saveShifts : function(shifts, callback){
        models.ShiftAssignment.collection.insert(shifts, function(err, docs){
            if (err)
            {
                console.log(err.toString());
                callback("fail");
            }
            else
                callback(docs);
        });
    },
    
    getShiftsByUser : function(userid, startDate, endDate, callback){
        models.ShiftAssignment.find({time: {$lte: endDate, $gte : startDate}, userId : userid}, function (err, shifts) {
            if (err) {
                return handleError(err);
            }
            else {
                callback(shifts);
            }
        });
    },
    
    getShiftsByDates : function(startDate, endDate, callback){
        models.ShiftAssignment.find({time: {$lte: endDate, $gte : startDate}}, function (err, shifts) {
            if (err) {
                return handleError(err);
            }
            else {
                callback(shifts);
            }
        });
    }
};