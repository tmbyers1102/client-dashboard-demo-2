// base('Tasks').create([
//     {
//         "fields": {
//             "Name": "api created task 00005",
//             "due_date": "2022-12-25",
//             "Status": "Todo",
//             "client_visible": true,
//             "new_client": [
//                 "reca1BIsqZ4IMpsHY"
//             ]
//         }
//     }
// ], function(err, records) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     records.forEach(function (record) {
//         console.log(record.getId());
//     });
//     prompt('Created record', createTask.id);
// });