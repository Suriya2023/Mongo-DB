//find Database

db.movies.find()
//find specify Data
db.movies.find({
    "title": "The Shawshank Redemption",
    "year":2018
})

db.movies.find({"title" : "avtar" })mon
//Specify Conditions Using Query Operators
db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )

db.movies.find( { year: { $in: [ 2018, 2023] } } )

//Specify Logical Operators (AND)



db.movies.find( { countries: "Mexico", "imdb.rating": { $gte: 7 } } )

db.movies.find( { cast: "Rachel Weisz", "runtime": { $gte: 121 } } )

//Specify Logical Operators (or)

db.movies.find( {
    runtime: 100,
    $or: [ { "year": { $gte: 2019 } }, { genres: "Drama" } ]
} )

db.movies.find( {
    runtime: 181,
    $or: [ { "year": { $gte: 2019 } }, { genres: "Drama" } ]
} )

db.movies.find( {
    cast: "Rachel Weisz",
    $or: [ { "year": { $gte: 2019 } }, { genres: "Drama" } ]
} )

