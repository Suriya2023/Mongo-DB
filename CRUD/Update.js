
db.movies.updateOne({ filter }, { $set: { updateData }, $currentDate: { lastUpdateddbdb: true } })
// update in inner data

db.movies.updateOne({ title: "Twilight" },
  {
    $set: {
      plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire."
    },
    $currentDate: { lastUpdated: true }
  })


db.movies.updateMany({ rated: "PG-13" },

  {
    $set: {
      Meaning: "PG-13 movies are films that may contain material inappropriate for children under 13, with parental guidance suggested."
    },
    $currentDate: { lastUpdated: true }
  })

// school> db.movies.find({rated:"PG-13"}).limit(5)


