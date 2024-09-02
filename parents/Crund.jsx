// find name 
de.Teachers.find({age:50,years_of_experience: {$lte:10} })
//
// find name and age
db.parents.find({ child_age :18})
db.parents.find({ child_age :18}).limit(5)
db.parents.find({ child_age :18}).count()
db.parents.find({parent_age: {$in: [28 , 48]}})
db.parents.find({$and:[{
    child_age:18},{parent_age:28}]})
db.parents.update({parent_age:28},{$set:{parent_age:11}})
school> db.parents.find({parent_age:11}).count()
33
school> db.parents.find({parent_age:28}).count()
0
db.parents.updateMany({parent_age:46},{$set:{parent_last_name:"Rajput"}})
db.parents.find({parent_last_name:"Rajput"}).toArray()
db.parents.find({parent_age:46}).count()
db.parents.updateMany({child_gender:"male"}, {$set:{child_first_name:"Suriya Singh"}})
db.parents.find({$and:[{child_first_name:"Suriya Singh"} ,{child_gender:'male'}]})
db.parents.find({parent_last_name:"Rajput" ,$or :[{$lte:{child_age:8}}]})
db.parents.find({child_age:{$lte:8}}).count()

//find using promt fumction


// find name and age




