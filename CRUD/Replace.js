//replace one document in dataBase
/*
db.collection.replaceOne(
    <filter>,
    <replacement>(New document},
    {
    (old Document))
       upsert: <boolean>,
       writeConcern: <document>,
       collation: <document>,
       hint: <document|string>
    }
 )
 */
db.movies.replaceOne(

    { title: "Jurassic World: Fallen Kingdom" },

    {
        title: '3 Idiots',
        genres: ['Comedy', 'Drama'],
        runtime: 170,
        rated: 'PG-13',
        year: 2009,
        directors: ['Rajkumar Hirani'],
        cast: ['Aamir Khan', 'R. Madhavan', 'Sharman Joshi'],
        type: 'movie',
    },
    {
        title: 'Jurassic World: Fallen Kingdom',
        genres: ['Action', 'Sci-Fi'],
        runtime: 130,
        rated: 'PG-13',
        year: 2018,
        directors: ['J. A. Bayona'],
        cast: ['Chris Pratt', 'Bryce Dallas Howard', 'Rafe Spall'],
        type: 'movie',
    }
)