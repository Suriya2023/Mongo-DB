//find a Teachers Details 
db.Teachers.find({ first_name: "Mélys" })
//find two record on and line name and age
db.Teachers.find({
    age:
        { $in: { '43', '50'} }
})
db.Teachers.find({ country: { $in: [{'China','Portugal'}] } }).count()
db.Teachers.find({ years_of_experience: { $in: [{30,23}] } }).count()
// db.Teachers.find({ years_of_experience: { $in: [{{30},{23}}] } }).count()
//find lte and gte in data base


// find lte
db.Teachers.find({age:{$lte:50}})
db.Teachers.find({age:{$lte:50}}).count()
db.Teachers.find({age:{$lte:50}}).toArray()
db.Teachers.find({age:{$lte:50}}).limit(5)



//find gte
db.Teachers.find({age:{$gte:35}}).
db.Teachers.find({age:{$gte:35}}).count()
db.Teachers.find({age:{$gte:35}}).toArray()
db.Teachers.find({age:{$gte:35}}).limit(5)

//find in
db.Teachers.find({age:{$in:[35,40,45]}})
db.Teachers.find({age:{$in: [35,50]}}).count()
db.Teachers.find({age:{$in: [35,50]}}).toArray()
db.Teachers.find({age:{$in: [35,50]}}).limit(5)

//find or
db.Teachers.find({$or:[{age:35},{age:40}]})
db.Teachers.find({$or:[{age:35},{country:"China"}]})
db.Teachers.find({$or:[{age:35},{country:"China"}]}).count()
db.Teachers.find({$or:[{age:35},{country:"China"}]}).toArray()
db.Teachers.find({$or:[{age:35},{country:"China"}]}).limit(5)

//find and
db.Teachers.find({$and:[{age:35},{subject_taught:"English"}]})
db.Teachers.find({$and:[{age:35},{subject_taught:"English"}]}).count()
db.Teachers.find({$and:[{age:35},{subject_taught:"English"}]}).toArray()
db.Teachers.find({$and:[{age:35},{subject_taught:"English"}]}).limit(5)

//update data
db.Teachers.find({age:25}).count()
db.Teachers.update({age:25}, {$set:{marital_statud:"maride"}})
db.Teachers.updateMany({age:25}, {$set:{marital_statud:"maride"}})
db.Teachers.find({marital_statud:"maride"}).count()
db.Teachers.find({age:25}).count()
db.Teachers.updateMany({marital_statud:"maride"}, {$set:{Total_of_child:["Boye","girl"]}})
db.Teachers.find({$or : [{marital_statud:"maride"},{age:25}]}  )
db.Teachers.find({$or:[{total_of_child:["Boye","girld"]},{country:"China"}]})
//find age > marital_status


db.Teachers.find({age:{$lte:30},marital_statud:"maride"})

db.Teachers.updateMany({age:{$gte:30}},{$set:{marital_statud:"UnMaride"}})
db.Teachers.find({age:{$gte:30}})
db.Teachers.find({age:{$gte:30}}).count()
db.Teachers.find({age:{$gte:30}}).toArray()
db.Teachers.find({age:{$gte:30}}).limit(5)

// db.Teachers.updateMany({age:{$gte:30},{$set:{marital_statud:"unmaride"}}})
