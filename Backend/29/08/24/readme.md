<!-- Microsoft Windows [Version 10.0.22631.4037]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Lenovo>mongosh
Current Mongosh Log ID: 66d3293d29853af4ac2710bb
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
Using MongoDB:          7.0.14
Using Mongosh:          2.3.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-08-30T10:41:59.809+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin     40.00 KiB
chitkara  88.00 KiB
config    72.00 KiB
local     40.00 KiB
test> use sharma
switched to db sharma
sharma> db.createCollection
[Function: createCollection] AsyncFunction {
  apiVersions: [ 1, Infinity ],
  returnsPromise: true,
  serverVersions: [ '0.0.0', '999.999.999' ],
  topologies: [ 'ReplSet', 'Sharded', 'LoadBalanced', 'Standalone' ],
  returnType: { type: 'unknown', attributes: {} },
  deprecated: false,
  platforms: [ 'Compass', 'Browser', 'CLI' ],
  isDirectShellCommand: false,
  acceptsRawInput: false,
  shellCommandCompleter: undefined,
  help: [Function (anonymous)] Help
}
sharma> db.userinsertMany
sharma.userinsertMany
sharma> db.createCollection("Student")
{ ok: 1 }
sharma> db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d32a8629853af4ac2710bc'),
    '1': ObjectId('66d32a8629853af4ac2710bd'),
    '2': ObjectId('66d32a8629853af4ac2710be'),
    '3': ObjectId('66d32a8629853af4ac2710bf')
  }
}
sharma> db.createCollection("Faculty")
{ ok: 1 }
sharma> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjsharma> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])

Uncaught:
SyntaxError: Unexpected token, expected "," (1:118)

> 1 | db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
    |
    ^
  2 |

sharma> db.Student.insertMany([
...   { name: "Jaiko", age: 60, rating: 85, subject: "Mathematics" },
...   { name: "Boby", age: 82, rating: 78, subject: "Physics" },
...   { name: "Naiv", age: 56, rating: 92, subject: "Chemistry" },
...   { name: "Chinky", age: 45, rating: 90, subject: "Chemistry" }
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d32bcc29853af4ac2710c0'),
    '1': ObjectId('66d32bcc29853af4ac2710c1'),
    '2': ObjectId('66d32bcc29853af4ac2710c2'),
    '3': ObjectId('66d32bcc29853af4ac2710c3')
  }
}
sharma> db.Collection("User")
TypeError: db.Collection is not a function
sharma> db.createCollection("User")
{ ok: 1 }
sharma> db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d32c5829853af4ac2710c4'),
    '1': ObjectId('66d32c5829853af4ac2710c5'),
    '2': ObjectId('66d32c5829853af4ac2710c6'),
    '3': ObjectId('66d32c5829853af4ac2710c7')
  }
}
sharma> d.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjesubject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:117)

> 1 | d.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
    |
   ^
  2 |

sharma> db.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjsharma> db.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])

Uncaught:
SyntaxError: Unexpected token, expected "," (1:118)

> 1 | db.faculty.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subjPandat> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
    |
    ^
  2 |

sharma> db.faculty.insertManydb.faculty.insertMany([
...   { name: "Jaiko", age: 60, rating: 85, subject: "Mathematics" },
...   { name: "Boby", age: 82, rating: 78, subject: "Physics" },
...   { name: "Naiv", age: 56, rating: 92, subject: "Chemistry" },
...   { name: "Chinky", age: 45, rating: 90, subject: "Chemistry" }
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d32d2629853af4ac2710c8'),
    '1': ObjectId('66d32d2629853af4ac2710c9'),
    '2': ObjectId('66d32d2629853af4ac2710ca'),
    '3': ObjectId('66d32d2629853af4ac2710cb')
  }
}
sharma> -->