//for delet data base
school> db.Teachers.findOne({age:50,first_name:"Ranna"})
school> db.Teachers.findOne({age:50,first_name:"Ranna"})

//delet firsr document
db.Teachers.deleteOne({age:50})

//delet all selected document
db.Teachers.deleteMany({country:"China"})

//delet all selected document
db.Teachers.deleteMany({})