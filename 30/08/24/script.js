// Microsoft Windows [Version 10.0.22631.4037]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\Lenovo>mongosh
// Current Mongosh Log ID: 66d3293d29853af4ac2710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-30T10:41:59.809+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin     40.00 KiB
// chitkara  88.00 KiB
// config    72.00 KiB
// local     40.00 KiB
// test> use sharma
// switched to db sharma
// sharma> db.createCollection
// [Function: createCollection] AsyncFunction {
//   apiVersions: [ 1, Infinity ],
//   returnsPromise: true,
//   serverVersions: [ '0.0.0', '999.999.999' ],
//   topologies: [ 'ReplSet', 'Sharded', 'LoadBalanced', 'Standalone' ],
//   returnType: { type: 'unknown', attributes: {} },
//   deprecated: false,
//   platforms: [ 'Compass', 'Browser', 'CLI' ],
//   isDirectShellCommand: false,
//   acceptsRawInput: false,
//   shellCommandCompleter: undefined,
//   help: [Function (anonymous)] Help
// }
// sharma> db.userinsertMany
// sharma.userinsertMany
// sharma> db.createCollection("Student")
// { ok: 1 }
// sharma> db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d32a8629853af4ac2710bc'),
//     '1': ObjectId('66d32a8629853af4ac2710bd'),
//     '2': ObjectId('66d32a8629853af4ac2710be'),
//     '3': ObjectId('66d32a8629853af4ac2710bf')
//   }
// }
// sharma> db.createCollection("Faculty")
// { ok: 1 }
// sharma> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjsharma> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])

// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:118)

// > 1 | db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
//     |
//     ^
//   2 |

// sharma> db.Student.insertMany([
// ...   { name: "Jaiko", age: 60, rating: 85, subject: "Mathematics" },
// ...   { name: "Boby", age: 82, rating: 78, subject: "Physics" },
// ...   { name: "Naiv", age: 56, rating: 92, subject: "Chemistry" },
// ...   { name: "Chinky", age: 45, rating: 90, subject: "Chemistry" }
// ... ])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d32bcc29853af4ac2710c0'),
//     '1': ObjectId('66d32bcc29853af4ac2710c1'),
//     '2': ObjectId('66d32bcc29853af4ac2710c2'),
//     '3': ObjectId('66d32bcc29853af4ac2710c3')
//   }
// }
// sharma> db.Collection("User")
// TypeError: db.Collection is not a function
// sharma> db.createCollection("User")
// { ok: 1 }
// sharma> db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d32c5829853af4ac2710c4'),
//     '1': ObjectId('66d32c5829853af4ac2710c5'),
//     '2': ObjectId('66d32c5829853af4ac2710c6'),
//     '3': ObjectId('66d32c5829853af4ac2710c7')
//   }
// }
// sharma> d.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjesubject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:117)

// > 1 | d.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
//     |
//    ^
//   2 |

// sharma> db.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjsharma> db.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])

// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:118)

// > 1 | db.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
//     |
//     ^
//   2 |

// sharma> db.faculty.insertManydb.faculty.insertMany([
// ...   { name: "Jaiko", age: 60, rating: 85, subject: "Mathematics" },
// ...   { name: "Boby", age: 82, rating: 78, subject: "Physics" },
// ...   { name: "Naiv", age: 56, rating: 92, subject: "Chemistry" },
// ...   { name: "Chinky", age: 45, rating: 90, subject: "Chemistry" }
// ... ])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d32d2629853af4ac2710c8'),
//     '1': ObjectId('66d32d2629853af4ac2710c9'),
//     '2': ObjectId('66d32d2629853af4ac2710ca'),
//     '3': ObjectId('66d32d2629853af4ac2710cb')
//   }
// }
// sharma> db.user.insert1db.user.insertOne({date:ISODate()});
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d352cd29853af4ac2710cc')
// }
// sharma> db.user.insertOne({date:ISODate()});
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d3672829853af4ac2710cd')
// }
// sharma> db.user.countDocuments()
// 9
// sharma> db.Faculty.countDocuments()
// 0
// sharma> db.Student.countDocuments()
// 4
// sharma> db.user.find().pretty();
// [
//   {
//     _id: ObjectId('66d32a8629853af4ac2710bc'),
//     name: 'Jack',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematcis'
//   },
//   {
//     _id: ObjectId('66d32a8629853af4ac2710bd'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics'
//   },
//   {
//     _id: ObjectId('66d32a8629853af4ac2710be'),
//     name: 'Nav',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66d32a8629853af4ac2710bf'),
//     name: 'Hitesh',
//     age: 19,
//     marks: 90,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66d32c5829853af4ac2710c4'),
//     name: 'Jack',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematcis'
//   },
//   {
//     _id: ObjectId('66d32c5829853af4ac2710c5'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics'
//   },
//   {
//     _id: ObjectId('66d32c5829853af4ac2710c6'),
//     name: 'Nav',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66d32c5829853af4ac2710c7'),
//     name: 'Hitesh',
//     age: 19,
//     marks: 90,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66d3672829853af4ac2710cd'),
//     date: ISODate('2024-08-31T18:55:36.820Z')
//   }
// ]
// sharma> db.Student.bulkWrite([ { updateOne: { filter: { name: "Jaiko" }, update: { $set: { grade: "A" } } } }, { updateOsharma> db.Student.bulkWrite([ { updateOne: { filter: { name: "Jaiko" }, update: { $set: { grade: "A" } } } }, { updateOne: { filter: { name: "Boby" }, update: { $set: { grade: "B" } } } }, { updateOne: { filter: { name: "Naiv" }, update: { $set: { grade: "A+" } } } }, { updateOne: { filter: { name: "CHinky" }, update: { $set: { grade: "A" } } } }] );
// {
//   acknowledged: true,
//   insertedCount: 0,
//   insertedIds: {},
//   matchedCount: 3,
//   modifiedCount: 3,
//   deletedCount: 0,
//   upsertedCount: 0,
//   upsertedIds: {}
// }
// sharma> db.Student.find({ age: 22, marks: 90 })

// sharma> db.user.findOne()
// {
//   _id: ObjectId('66d32a8629853af4ac2710bc'),
//   name: 'Jack',
//   age: 20,
//   marks: 85,
//   subject: 'Mathematcis'
// }
// sharma> db.Student.find({ grade: "A+" })
// [
//   {
//     _id: ObjectId('66d32bcc29853af4ac2710c2'),
//     name: 'Naiv',
//     age: 56,
//     rating: 92,
//     subject: 'Chemistry',
//     grade: 'A+'
//   }
// ]
// sharma> db.user.find({age: {$gte:"17"}, marks: {$gte:"80"}})

// sharma> db.Student.find( { $or: [{age:"18"}, {marks:"95"}] })

// sharma> db.Student.find( { $or: [{age:"18"}, {marks:"95"}] })

// sharma> db.Student.find( { $and: [{age:"18"}, {marks:"85"}] })

// sharma>










