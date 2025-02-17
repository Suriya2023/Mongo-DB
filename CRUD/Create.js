db.movies.insertMany([
  {
    title: "Jurassic World: Fallen Kingdom",
    genres: ["Action", "Sci-Fi"],
    runtime: 130,
    rated: "PG-13",
    year: 2018,
    directors: ["J. A. Bayona"],
    cast: ["Chris Pratt", "Bryce Dallas Howard", "Rafe Spall"],
    type: "movie",
  },
  {
    title: "Tag",
    genres: ["Comedy", "Action"],
    runtime: 105,
    rated: "R",
    year: 2018,
    directors: ["Jeff Tomsic"],
    cast: ["Annabelle Wallis", "Jeremy Renner", "Jon Hamm"],
    type: "movie",
  },
]);

//insert five More  movies

db.movies.insertMany([
  {
    title: "Avatar",
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 162,
    rated: "PG-13",
    year: 2009,
    directors: ["James Cameron"],
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    type: "movie",
  },
  {
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    rated: "PG-13",
    year: 2014,
    directors: ["Christopher Nolan"],
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    type: "movie",
  },
  {
    title: "The Matrix",
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    rated: "R",
    year: 1999,
    directors: ["The Wachowskis"],
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    type: "movie",
  },
  {
    title: "Inception",
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: 148,
    rated: "PG-13",
    year: 2010,
    directors: ["Christopher Nolan"],
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    type: "movie",
  },
]);

//insert 50 new Movies

db.movies.insertMany([
  {
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    rated: "PG-13",
    year: 2008,
    directors: ["Christopher Nolan"],
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    type: "movie",
  },
  {
    title: "Titanic",
    genres: ["Drama", "Romance"],
    runtime: 195,
    rated: "PG-13",
    year: 1997,
    directors: ["James Cameron"],
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    type: "movie",
  },
  {
    title: "Guardians of the Galaxy",
    genres: ["Action", "Adventure", "Comedy"],
    runtime: 121,
    rated: "PG-13",
    year: 2014,
    directors: ["James Gunn"],
    cast: ["Chris Pratt", "Zoe Saldana", "Bradley Cooper"],
    type: "movie",
  },
  {
    title: "Avengers: Endgame",
    genres: ["Action", "Adventure", "Drama"],
    runtime: 181,
    rated: "PG-13",
    year: 2019,
    directors: ["Anthony Russo", "Joe Russo"],
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    type: "movie",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genres: ["Animation", "Action", "Adventure"],
    runtime: 117,
    rated: "PG",
    year: 2018,
    directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    type: "movie",
  },
  {
    title: "Black Panther",
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 134,
    rated: "PG-13",
    year: 2018,
    directors: ["Ryan Coogler"],
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    type: "movie",
  },
  {
    title: "Jurassic Park",
    genres: ["Adventure", "Sci-Fi", "Thriller"],
    runtime: 127,
    rated: "PG-13",
    year: 1993,
    directors: ["Steven Spielberg"],
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    type: "movie",
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 143,
    rated: "PG-13",
    year: 2003,
    directors: ["Gore Verbinski"],
    cast: ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom"],
    type: "movie",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 121,
    rated: "PG",
    year: 1977,
    directors: ["George Lucas"],
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    type: "movie",
  },
  {
    title: "The Lion King",
    genres: ["Animation", "Adventure", "Drama"],
    runtime: 88,
    rated: "G",
    year: 1994,
    directors: ["Roger Allers", "Rob Minkoff"],
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    type: "movie",
  },
  {
    title: "Frozen",
    genres: ["Animation", "Adventure", "Comedy"],
    runtime: 102,
    rated: "PG",
    year: 2013,
    directors: ["Chris Buck", "Jennifer Lee"],
    cast: ["Kristen Bell", "Idina Menzel", "Josh Gad"],
    type: "movie",
  },
  {
    title: "Shrek",
    genres: ["Animation", "Adventure", "Comedy"],
    runtime: 90,
    rated: "PG",
    year: 2001,
    directors: ["Andrew Adamson", "Vicky Jenson"],
    cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
    type: "movie",
  },
  {
    title: "Finding Nemo",
    genres: ["Animation", "Adventure", "Comedy"],
    runtime: 100,
    rated: "G",
    year: 2003,
    directors: ["Andrew Stanton", "Lee Unkrich"],
    cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    type: "movie",
  },
  {
    title: "Toy Story",
    genres: ["Animation", "Adventure", "Comedy"],
    runtime: 81,
    rated: "G",
    year: 1995,
    directors: ["John Lasseter"],
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    type: "movie",
  },
  {
    title: "Coco",
    genres: ["Animation", "Adventure", "Comedy"],
    runtime: 105,
    rated: "PG",
    year: 2017,
    directors: ["Lee Unkrich", "Adrian Molina"],
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    type: "movie",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genres: ["Adventure", "Family", "Fantasy"],
    runtime: 152,
    rated: "PG",
    year: 2001,
    directors: ["Chris Columbus"],
    cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    type: "movie",
  },
  {
    title: "The Avengers",
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 143,
    rated: "PG-13",
    year: 2012,
    directors: ["Joss Whedon"],
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    type: "movie",
  },
  {
    title: "Batman Begins",
    genres: ["Action", "Adventure"],
    runtime: 140,
    rated: "PG-13",
    year: 2005,
    directors: ["Christopher Nolan"],
    cast: ["Christian Bale", "Michael Caine", "Ken Watanabe"],
    type: "movie",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genres: ["Adventure", "Drama", "Fantasy"],
    runtime: 178,
    rated: "PG-13",
    year: 2001,
    directors: ["Peter Jackson"],
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    type: "movie",
  },
  {
    title: "The Hunger Games",
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 142,
    rated: "PG-13",
    year: 2012,
    directors: ["Gary Ross"],
    cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
    type: "movie",
  },
  {
    title: "Iron Man",
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 126,
    rated: "PG-13",
    year: 2008,
    directors: ["Jon Favreau"],
    cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard"],
    type: "movie",
  },
  {
    title: "Deadpool",
    genres: ["Action", "Adventure", "Comedy"],
    runtime: 108,
    rated: "R",
    year: 2016,
    directors: ["Tim Miller"],
    cast: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"],
    type: "movie",
  },
  {
    title: "The Social Network",
    genres: ["Biography", "Drama"],
    runtime: 120,
    rated: "PG-13",
    year: 2010,
    directors: ["David Fincher"],
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    type: "movie",
  },
  {
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    runtime: 142,
    rated: "R",
    year: 1994,
    directors: ["Frank Darabont"],
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    type: "movie",
  },
  {
    title: "Forrest Gump",
    genres: ["Drama", "Romance"],
    runtime: 142,
    rated: "PG-13",
    year: 1994,
    directors: ["Robert Zemeckis"],
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    type: "movie",
  },
  {
    title: "The Silence of the Lambs",
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 118,
    rated: "R",
    year: 1991,
    directors: ["Jonathan Demme"],
    cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    type: "movie",
  },
  {
    title: "Gladiator",
    genres: ["Action", "Adventure", "Drama"],
    runtime: 155,
    rated: "R",
    year: 2000,
    directors: ["Ridley Scott"],
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    type: "movie",
  },
  {
    title: "Braveheart",
    genres: ["Biography", "Drama", "History"],
    runtime: 178,
    rated: "R",
    year: 1995,
    directors: ["Mel Gibson"],
    cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
    type: "movie",
  },
  {
    title: "The Godfather",
    genres: ["Crime", "Drama"],
    runtime: 175,
    rated: "R",
    year: 1972,
    directors: ["Francis Ford Coppola"],
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    type: "movie",
  },
  {
    title: "Goodfellas",
    genres: ["Biography", "Crime", "Drama"],
    runtime: 145,
    rated: "R",
    year: 1990,
    directors: ["Martin Scorsese"],
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    type: "movie",
  },
  {
    title: "Pulp Fiction",
    genres: ["Crime", "Drama"],
    runtime: 154,
    rated: "R",
    year: 1994,
    directors: ["Quentin Tarantino"],
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    type: "movie",
  },
  {
    title: "Schindler's List",
    genres: ["Biography", "Drama", "History"],
    runtime: 195,
    rated: "R",
    year: 1993,
    directors: ["Steven Spielberg"],
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    type: "movie",
  },
]);

