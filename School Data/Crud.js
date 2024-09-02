//insert data
db.student.find({ age: 20 })

//find data 
db.student.find({ gender: "male" },);

//multi data find
db.student.find({
    gender: { $in: { 'Male', 'Female'} }
});

//Fined Multiple data 
db.student.find(
    {
        gender: 'Male',
        $or: [{ age: 18 }, { major: 'Biology' }]

    }
)
//find data with limit
db.student.find({ age: 18 }).limit(5);

//find data with skip   
db.student.find({ age: 18 }).skip(5).count();
//count data
db.student.find({ age: 18 }).count();
//toarray data
db.student.find({ age: 18 }).toArray();
//sort data
db.student.find({ age: 18 }).sort({ age: 1 });
//update data
db.student.update({ age: 18 }, { name: 'John', age: 20 });
db.student.update({ name: "Ax" }, { $set: { age: 20 } })
db.student.find({ first_name: "Ax" })
//update multiple data
db.student.update({ age: 18 }, { name: 'John', age: 20 }, { multi: true });
//replece data
db.student.update({ age: 18 }, { name: 'John', age: 20 }, { upsert: true });
//Replace data
db.student.update({ age: 18 }, { name: 'John', age: 20 }, {
    upsert: true,


    db.student.repleceOne(
        { age: 18 },//find
        { sports: "kabbadi" },//new data
        { gpa: 0.73 }//old data
    )

db.student.repleceOne(
        { age: 18 },
        { sports: "kabbadi" },
        { gpa: 0.73 }//old data
    )
//column add
db.student.updateMany({ age: 18 },
        {
            $set: { sports: "kabbadi" }
        })
    db.student.find({ gender: { $in: ['Female', 'Non-binary'] } }).count()
    db.student.find({ age: { $lt: 20 } })


//logical operetors
db.student.find({ $and: [{ age: 18 }, { major: 'Biology' }] })
db.student.find({ $or: [{ age: 18 }, { major: 'Biology' }] })
db.student.find({ $nor: [{ age: 18 }, { major: 'Biology' }] })
// greterd then and less then

db.student.find({ gpa: { $lt: 3.00 } })
db.student.updateMany({ age: 25 }, {
            $set: { gpa: 5.65 }
        })
db.student.deleteMany({ gender: "Female" })
db.student.find({ gpa: 5.65 }).limit(5)
db.student.find({ gpa: 5.65 }).skip(5)
// find in opertor





//set data
db.student.updateOne({ name: "John" }, { $set: { age: 25 } });