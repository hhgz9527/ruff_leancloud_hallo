'use strict';
var AV = require('leanengine')

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    AV.initialize("Dvkub2eLIXlbDelynl7X6MGH", "LBSzvrBgTeErPiG4gXv1wcre", "gRAL5pQMmpAgx16qn0GSK0T1");
    var Record = AV.Object.extend('RuffRecord');
    var record = new Record();
    record.set('env', 'nothing');
    record.set('type', 'start');
    record.save().then(function(record) {
	console.log('save start record with objectId: ' + record.id);
    }, function(err) {
	console.log('failed to create start record. bcz: ' + err.message)
    });
    $('led-r').turnOn();
});

$.end(function () {
    var Record = AV.Object.extend('RuffRecord');
    var record = new Record();
    record.set('env', 'nothing');
    record.set('type', 'end');
    record.save().then(function(record) {
	console.log('save end record with objectId: ' + record.id);
    }, function(err) {
	console.log('failed to create end record. bcz: ' + err.message)
    });
 
    $('led-r').turnOff();
});
