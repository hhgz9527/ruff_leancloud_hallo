'use strict';
var AV = require('avoscloud-sdk')

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    console.log("about to initialize av apis");
    //AV.initialize("Dvkub2eLIXlbDelynl7X6MGH", "LBSzvrBgTeErPiG5gXv1wcre", "gRAL5pQMmpAgx16qn0GSK0T1");
    AV.initialize("tgUBFfoOq1e9Wn7kJAElNep0-gzGzoHsz", "OA9xvXNvnFtf5A4HENcgosAx");
    console.log("av apis initialized");
    var Record = AV.Object.extend('RuffRecord');
    var record = new Record();
    record.set('env', 'nothing');
    record.set('type', 'start');
    record.save().then(function(record) {
	console.log('save start record with objectId: ' + record.id);
    }, function(err) {
	console.log('failed to create start record. bcz: ' + err.message)
    });
    console.log("data saved");
    $('#led-r').turnOn();
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

    $('#led-r').turnOff();
});
