import { Movie } from '../types/Movie';

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'RRR',
    description: 'A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 8.0,
    price: 12.99,
    genres: ['Action', 'Drama', 'Historical'],
    industry: 'Tollywood',
    insights: {
      boxOffice: '₹1,200 crore (US$150 million)',
      awards: [
        'Academy Award for Best Original Song',
        'Golden Globe Award for Best Original Song',
        'Critics Choice Award for Best Foreign Language Film'
      ],
      trivia: [
        'The film took nearly 3 years to complete',
        'It features one of the most expensive action sequences in Indian cinema',
        'The film was shot simultaneously in Telugu and Hindi'
      ],
      cast: [
        { name: 'N.T. Rama Rao Jr.', role: 'Komaram Bheem' },
        { name: 'Ram Charan', role: 'Alluri Sitarama Raju' },
        { name: 'Alia Bhatt', role: 'Sita' }
      ],
      crew: [
        { name: 'S.S. Rajamouli', role: 'Director' },
        { name: 'M.M. Keeravani', role: 'Music Director' },
        { name: 'K.K. Senthil Kumar', role: 'Cinematographer' }
      ]
    }
  },
  {
    id: 2,
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 8.8,
    price: 15.99,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    industry: 'Hollywood',
    insights: {
      boxOffice: '$700 million',
      awards: [
        'Academy Award for Best Visual Effects',
        'BAFTA Award for Best Cinematography',
        'Critics Choice Award for Best Sci-Fi Film'
      ],
      trivia: [
        'Filmed in the deserts of Abu Dhabi and Jordan',
        'Features one of the largest practical sets ever built',
        'The sandworm scenes took months of preparation'
      ],
      cast: [
        { name: 'Timothée Chalamet', role: 'Paul Atreides' },
        { name: 'Zendaya', role: 'Chani' },
        { name: 'Rebecca Ferguson', role: 'Lady Jessica' }
      ],
      crew: [
        { name: 'Denis Villeneuve', role: 'Director' },
        { name: 'Hans Zimmer', role: 'Composer' },
        { name: 'Greig Fraser', role: 'Cinematographer' }
      ]
    }
  },
  {
    id: 3,
    title: 'Pathaan',
    description: 'An Indian spy battles against the leader of a gang of mercenaries who have nefarious plans to target his homeland.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
    rating: 7.5,
    price: 11.99,
    genres: ['Action', 'Thriller', 'Spy'],
    industry: 'Bollywood',
    insights: {
      boxOffice: '₹1,050 crore (US$130 million)',
      awards: [
        'Filmfare Award for Best Action',
        'IIFA Award for Best Stunt Choreography',
        'Zee Cine Award for Best Action'
      ],
      trivia: [
        'Features one of the most expensive action sequences in Bollywood',
        'The film marked Shah Rukh Khan\'s comeback after 4 years',
        'Shot across multiple countries including UAE, Spain, and Turkey'
      ],
      cast: [
        { name: 'Shah Rukh Khan', role: 'Pathaan' },
        { name: 'Deepika Padukone', role: 'Rubina' },
        { name: 'John Abraham', role: 'Jim' }
      ],
      crew: [
        { name: 'Siddharth Anand', role: 'Director' },
        { name: 'Vishal-Shekhar', role: 'Music Directors' },
        { name: 'Satchith Paulose', role: 'Cinematographer' }
      ]
    }
  },
  {
    id: 4,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    rating: 8.8,
    price: 14.99,
    genres: ["Action", "Adventure", "Sci-Fi"],
    industry: "Hollywood",
    insights: {
      boxOffice: "$836.8 million",
      awards: [
        "Academy Award for Best Cinematography",
        "BAFTA Award for Best Special Visual Effects",
        "Saturn Award for Best Science Fiction Film"
      ],
      trivia: [
        "The spinning top at the end was not CGI",
        "The hallway fight scene took 3 weeks to film",
        "Hans Zimmer composed the score before filming began"
      ],
      cast: [
        { name: "Leonardo DiCaprio", role: "Cobb" },
        { name: "Joseph Gordon-Levitt", role: "Arthur" },
        { name: "Ellen Page", role: "Ariadne" }
      ],
      crew: [
        { name: "Christopher Nolan", role: "Director" },
        { name: "Hans Zimmer", role: "Composer" },
        { name: "Wally Pfister", role: "Cinematographer" }
      ]
    }
  },
  {
    id: 5,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 9.0,
    price: 13.99,
    genres: ["Action", "Crime", "Drama"],
    industry: "Hollywood",
    insights: {
      boxOffice: "$1.005 billion",
      awards: [
        "Academy Award for Best Supporting Actor",
        "BAFTA Award for Best Supporting Actor",
        "Saturn Award for Best Action/Adventure/Thriller Film"
      ],
      trivia: [
        "Heath Ledger's performance as the Joker is considered one of the greatest in cinema history",
        "The hospital explosion scene was done in one take",
        "Christian Bale performed most of his own stunts"
      ],
      cast: [
        { name: "Christian Bale", role: "Bruce Wayne / Batman" },
        { name: "Heath Ledger", role: "Joker" },
        { name: "Aaron Eckhart", role: "Harvey Dent" }
      ],
      crew: [
        { name: "Christopher Nolan", role: "Director" },
        { name: "Hans Zimmer", role: "Composer" },
        { name: "Wally Pfister", role: "Cinematographer" }
      ]
    }
  },
  {
    id: 6,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: 8.6,
    price: 14.99,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    industry: "Hollywood",
    insights: {
      boxOffice: "$677.5 million",
      awards: [
        "Academy Award for Best Visual Effects",
        "BAFTA Award for Best Special Visual Effects",
        "Saturn Award for Best Science Fiction Film"
      ],
      trivia: [
        "The black hole visuals were created using actual scientific equations",
        "Matthew McConaughey lost 50 pounds for the role",
        "The cornfield scenes were shot in real cornfields in Canada"
      ],
      cast: [
        { name: "Matthew McConaughey", role: "Cooper" },
        { name: "Anne Hathaway", role: "Brand" },
        { name: "Jessica Chastain", role: "Murph" }
      ],
      crew: [
        { name: "Christopher Nolan", role: "Director" },
        { name: "Hans Zimmer", role: "Composer" },
        { name: "Hoyte van Hoytema", role: "Cinematographer" }
      ]
    }
  },
  {
    id: 7,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.9,
    price: 12.99,
    genres: ["Crime", "Drama"],
    industry: "Hollywood",
    insights: {
      boxOffice: "$213.9 million",
      awards: [
        "Academy Award for Best Original Screenplay",
        "Palme d'Or at Cannes Film Festival",
        "BAFTA Award for Best Original Screenplay"
      ],
      trivia: [
        "The briefcase's contents are never revealed",
        "The dance scene between Travolta and Thurman was improvised",
        "The film's non-linear structure was inspired by Rashomon"
      ],
      cast: [
        { name: "John Travolta", role: "Vincent Vega" },
        { name: "Samuel L. Jackson", role: "Jules Winnfield" },
        { name: "Uma Thurman", role: "Mia Wallace" }
      ],
      crew: [
        { name: "Quentin Tarantino", role: "Director" },
        { name: "Quentin Tarantino", role: "Writer" },
        { name: "Andrzej Sekuła", role: "Cinematographer" }
      ]
    }
  },
  {
    id: 8,
    title: "The Matrix",
    description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.7,
    price: 11.99,
    genres: ["Action", "Sci-Fi"],
    industry: "Hollywood",
    insights: {
      boxOffice: "$463.5 million",
      awards: [
        "Academy Award for Best Visual Effects",
        "BAFTA Award for Best Sound",
        "Saturn Award for Best Science Fiction Film"
      ],
      trivia: [
        "The bullet time effect was created using multiple cameras",
        "Keanu Reeves trained for 4 months in martial arts",
        "The green code in the opening credits is sushi recipes"
      ],
      cast: [
        { name: "Keanu Reeves", role: "Neo" },
        { name: "Laurence Fishburne", role: "Morpheus" },
        { name: "Carrie-Anne Moss", role: "Trinity" }
      ],
      crew: [
        { name: "Lana Wachowski", role: "Director" },
        { name: "Lilly Wachowski", role: "Director" },
        { name: "Bill Pope", role: "Cinematographer" }
      ]
    }
  },
  {
    id: 9,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    rating: 8.8,
    price: 10.99,
    genres: ["Drama", "Romance"],
    industry: "Hollywood",
    insights: {
      boxOffice: "$677.9 million",
      awards: [
        "Academy Award for Best Picture",
        "Academy Award for Best Actor",
        "Academy Award for Best Director"
      ],
      trivia: [
        "Tom Hanks wasn't paid for his role, instead taking a percentage of the gross",
        "The bench scenes were filmed in Savannah, Georgia",
        "The feather at the beginning and end was CGI"
      ],
      cast: [
        { name: "Tom Hanks", role: "Forrest Gump" },
        { name: "Robin Wright", role: "Jenny Curran" },
        { name: "Gary Sinise", role: "Lieutenant Dan" }
      ],
      crew: [
        { name: "Robert Zemeckis", role: "Director" },
        { name: "Alan Silvestri", role: "Composer" },
        { name: "Don Burgess", role: "Cinematographer" }
      ]
    }
  }
]; 