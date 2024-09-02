mongosh // for active mongo shell for database

show dbs //show all databae in comand line (cmd)

Use school(name of dataBase ) // change database 

ctrl + c // exit mongo shell 

// count
//count + find
bd.users.find().count()
//count + find + limit
bd.users.find().count().limit(5)
//count + find + limit + all data show withiout using it
db.users.find().toArray()

db.movies.find({runtime: { $gt: 180,$lt:150}}).count()
school> db.movies.find({genres:"Holywood",runtime:{$lte:100}}).count()
school> db.movies.find({ runtime:100 , $or: [{year: {$gte :2019}} , {genres:"Drama"}],}).count()