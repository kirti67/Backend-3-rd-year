db.myCollection.countDocuments()
  db.myCollection.estimatedDocumentCount()

db.myCollection.updateMany(
...  {},                          // Empty filter matches all documents
...  { $set: { subject: "datascine" } } // Update operation to set the new value
...)

db.myCollection.updateMany({}, { $set: {address: "Chitkara University"}})

db.myCollection.find()

db.myCollection.find({age: "22", marks: "95"})

db.myCollection.find({age: {$gte:"17"}, marks: {$gte:"80"}})

db.myCollection.find( { $and: [{age:"18"}, {marks:"85"}] })

db.myCollection.find( { $or: [{age:"18"}, {marks:"95"}] })
