import { Movie, UserReview } from '../types';

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Oppenheimer',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
    rating: 8.9,
    popularity: 95,
    price: 19.99,
    genres: ['Biography', 'Drama', 'History'],
    industry: 'Hollywood',
    releaseDate: '2023-07-21',
    trailerUrl: 'https://www.youtube.com/watch?v=uYPbbksJxIg',
    reviews: [] as UserReview[],
    tags: ['Biography', 'Drama', 'History'],
    insights: {
      boxOffice: '$950 million',
      awards: [
        'Academy Award for Best Picture',
        'Academy Award for Best Director',
        'Golden Globe Award for Best Motion Picture – Drama'
      ],
      trivia: [
        "Christopher Nolan's first R-rated film since Insomnia (2002)",
        'Shot entirely on IMAX cameras',
        "Cillian Murphy's first leading role in a Christopher Nolan film"
      ],
      cast: [
        { name: 'Cillian Murphy', role: 'J. Robert Oppenheimer', imageUrl: 'https://example.com/cillian.jpg' },
        { name: 'Emily Blunt', role: 'Katherine Oppenheimer', imageUrl: 'https://example.com/emily.jpg' },
        { name: 'Matt Damon', role: 'Leslie Groves', imageUrl: 'https://example.com/matt.jpg' }
      ],
      crew: [
        { name: 'Christopher Nolan', role: 'Director', imageUrl: 'https://example.com/nolan.jpg' },
        { name: 'Hoyte van Hoytema', role: 'Cinematographer', imageUrl: 'https://example.com/hoyte.jpg' }
      ]
    }
  },
  {
    id: 2,
    title: 'RRR',
    description: 'A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 8.0,
    popularity: 85,
    price: 12.99,
    genres: ['Action', 'Drama', 'Historical'],
    industry: 'Tollywood',
    releaseDate: '2022-03-24',
    trailerUrl: 'https://www.youtube.com/watch?v=f_vbAtFSEc0',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
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
        { name: 'S.S. Rajamouli', role: 'Director', imageUrl: 'https://example.com/rajamouli.jpg' },
        { name: 'M.M. Keeravani', role: 'Music Director', imageUrl: 'https://example.com/keeravani.jpg' },
        { name: 'K.K. Senthil Kumar', role: 'Cinematographer', imageUrl: 'https://example.com/senthil.jpg' }
      ]
    }
  },
  {
    id: 2,
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 8.8,
    popularity: 94,
    price: 15.99,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    industry: 'Hollywood',
    releaseDate: '2024-03-01',
    trailerUrl: 'https://www.youtube.com/watch?v=Way9YcukaNE',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
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
        { name: 'Denis Villeneuve', role: 'Director', imageUrl: 'https://example.com/villeneuve.jpg' },
        { name: 'Hans Zimmer', role: 'Composer', imageUrl: 'https://example.com/zimmer.jpg' },
        { name: 'Greig Fraser', role: 'Cinematographer', imageUrl: 'https://example.com/fraser.jpg' }
      ]
    }
  },
  {
    id: 4,
    title: 'Pathaan',
    description: 'An Indian spy battles against the leader of a gang of mercenaries who have nefarious plans to target his homeland.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
    rating: 7.5,
    popularity: 85,
    price: 14.99,
    genres: ['Action', 'Adventure', 'Thriller'],
    industry: 'Bollywood',
    releaseDate: '2023-01-25',
    trailerUrl: 'https://www.youtube.com/watch?v=vqu4z34wENw',
    reviews: [] as UserReview[],
    tags: ['Action', 'Adventure', 'Thriller'],
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
        { name: 'Siddharth Anand', role: 'Director', imageUrl: 'https://example.com/anand.jpg' },
        { name: 'Vishal-Shekhar', role: 'Music Director', imageUrl: 'https://example.com/vishal.jpg' },
        { name: 'Satchith Paulose', role: 'Cinematographer', imageUrl: 'https://example.com/paulose.jpg' }
      ]
    }
  },
  {
    id: 5,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    rating: 8.8,
    popularity: 95,
    price: 14.99,
    genres: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
    industry: 'Hollywood',
    releaseDate: '2010-07-16',
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
    insights: {
      boxOffice: '$836.8 million',
      awards: [
        'Academy Award for Best Cinematography',
        'BAFTA Award for Best Special Visual Effects',
        'Saturn Award for Best Science Fiction Film'
      ],
      trivia: [
        'The spinning top at the end was not CGI',
        'The hallway fight scene took 3 weeks to film',
        'Hans Zimmer composed the score before filming began'
      ],
      cast: [
        { name: 'Leonardo DiCaprio', role: 'Cobb' },
        { name: 'Joseph Gordon-Levitt', role: 'Arthur' },
        { name: 'Ellen Page', role: 'Ariadne' }
      ],
      crew: [
        { name: 'Christopher Nolan', role: 'Director', imageUrl: 'https://example.com/nolan.jpg' },
        { name: 'Hans Zimmer', role: 'Composer', imageUrl: 'https://example.com/zimmer.jpg' },
        { name: 'Wally Pfister', role: 'Cinematographer', imageUrl: 'https://example.com/pfister.jpg' }
      ]
    }
  },
  {
    id: 6,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNjUyNQ@@._V1_.jpg',
    rating: 9.0,
    popularity: 98,
    price: 14.99,
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
    industry: 'Hollywood',
    releaseDate: '2008-07-18',
    trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
    insights: {
      boxOffice: '$1.005 billion',
      awards: [
        'Academy Award for Best Supporting Actor',
        'BAFTA Award for Best Supporting Actor',
        'Saturn Award for Best Action/Adventure/Thriller Film'
      ],
      trivia: [
        'Heath Ledger\'s performance as the Joker is considered one of the greatest in cinema history',
        'The hospital explosion scene was done in one take',
        'Christian Bale performed most of his own stunts'
      ],
      cast: [
        { name: 'Christian Bale', role: 'Bruce Wayne / Batman' },
        { name: 'Heath Ledger', role: 'Joker' },
        { name: 'Aaron Eckhart', role: 'Harvey Dent' }
      ],
      crew: [
        { name: 'Christopher Nolan', role: 'Director', imageUrl: 'https://example.com/nolan.jpg' },
        { name: 'Hans Zimmer', role: 'Composer', imageUrl: 'https://example.com/zimmer.jpg' },
        { name: 'Wally Pfister', role: 'Cinematographer', imageUrl: 'https://example.com/pfister.jpg' }
      ]
    }
  },
  {
    id: 7,
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    rating: 8.7,
    popularity: 92,
    price: 12.99,
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2014-11-07',
    trailerUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    reviews: [] as UserReview[],
    tags: ['Adventure', 'Drama', 'Sci-Fi'],
    insights: {
      boxOffice: '$677.5 million',
      awards: [
        'Academy Award for Best Visual Effects',
        'BAFTA Award for Best Special Visual Effects',
        'Saturn Award for Best Science Fiction Film'
      ],
      trivia: [
        'The black hole visuals were created using actual scientific equations',
        'Matthew McConaughey lost 50 pounds for the role',
        'The cornfield scenes were shot in real cornfields in Canada'
      ],
      cast: [
        { name: 'Matthew McConaughey', role: 'Cooper' },
        { name: 'Anne Hathaway', role: 'Brand' },
        { name: 'Jessica Chastain', role: 'Murph' }
      ],
      crew: [
        { name: 'Christopher Nolan', role: 'Director', imageUrl: 'https://example.com/nolan.jpg' },
        { name: 'Emma Thomas', role: 'Producer', imageUrl: 'https://example.com/thomas.jpg' },
        { name: 'Hoyte van Hoytema', role: 'Cinematographer', imageUrl: 'https://example.com/hoytema.jpg' },
        { name: 'Hans Zimmer', role: 'Composer', imageUrl: 'https://example.com/zimmer.jpg' }
      ]
    }
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    rating: 8.9,
    popularity: 91,
    price: 13.99,
    genres: ['Crime', 'Drama'],
    industry: 'Hollywood',
    releaseDate: '1994-10-14',
    trailerUrl: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
    insights: {
      boxOffice: '$213.9 million',
      awards: [
        'Academy Award for Best Original Screenplay',
        'Palme d\'Or at Cannes Film Festival',
        'BAFTA Award for Best Original Screenplay'
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
        { name: "Quentin Tarantino", role: "Director", imageUrl: 'https://example.com/tarantino.jpg' },
        { name: "Roger Avary", role: "Writer", imageUrl: 'https://example.com/avary.jpg' },
        { name: "Sally Menke", role: "Editor", imageUrl: 'https://example.com/menke.jpg' }
      ]
    }
  },
  {
    id: 9,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with a low IQ, whose only desire is to be reunited with his childhood sweetheart.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNjUyNQ@@._V1_.jpg",
    rating: 8.8,
    popularity: 89,
    price: 13.99,
    genres: ['Drama', 'Romance'],
    industry: 'Hollywood',
    releaseDate: '1994-07-06',
    trailerUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
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
        { name: "James Cameron", role: "Director", imageUrl: 'https://example.com/cameron.jpg' },
        { name: "Jon Landau", role: "Producer", imageUrl: 'https://example.com/landau.jpg' },
        { name: "Russell Carpenter", role: "Cinematographer", imageUrl: 'https://example.com/carpenter.jpg' }
      ]
    }
  },
  {
    id: 10,
    title: 'Barbie',
    description: 'Barbie suffers a crisis that leads her to question her world and her existence.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 7.5,
    popularity: 90,
    price: 19.99,
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    industry: 'Hollywood',
    releaseDate: '2023-07-21',
    trailerUrl: 'https://www.youtube.com/watch?v=pBk4NYhWNMM',
    reviews: [] as UserReview[],
    tags: ['Adventure', 'Comedy', 'Fantasy'],
    insights: {
      boxOffice: '$1.4 billion',
      awards: [
        'Golden Globe Award for Best Motion Picture – Musical or Comedy',
        'Critics Choice Award for Best Comedy'
      ],
      trivia: [
        'First live-action Barbie movie',
        'Highest-grossing film directed by a woman',
        'Shot simultaneously with Oppenheimer'
      ],
      cast: [
        { name: 'Margot Robbie', role: 'Barbie', imageUrl: 'https://example.com/margot.jpg' },
        { name: 'Ryan Gosling', role: 'Ken', imageUrl: 'https://example.com/ryan.jpg' },
        { name: 'America Ferrera', role: 'Gloria', imageUrl: 'https://example.com/america.jpg' }
      ],
      crew: [
        { name: 'Greta Gerwig', role: 'Director', imageUrl: 'https://example.com/greta.jpg' },
        { name: 'Noah Baumbach', role: 'Writer', imageUrl: 'https://example.com/noah.jpg' }
      ]
    }
  },
  {
    id: 11,
    title: 'Everything Everywhere All at Once',
    description: 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg',
    rating: 7.9,
    popularity: 92,
    price: 16.99,
    genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2022-03-25',
    trailerUrl: 'https://www.youtube.com/watch?v=wxN1T1uxQ2g',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
    insights: {
      boxOffice: '$140 million',
      awards: [
        'Academy Award for Best Picture',
        'Academy Award for Best Actress',
        'Academy Award for Best Supporting Actor',
        'Academy Award for Best Supporting Actress'
      ],
      trivia: [
        'Michelle Yeoh\'s first leading role in a Hollywood film',
        'Shot in 38 days',
        'Ke Huy Quan\'s return to acting after a 20-year hiatus'
      ],
      cast: [
        { name: 'Michelle Yeoh', role: 'Evelyn Wang', imageUrl: 'https://example.com/michelle.jpg' },
        { name: 'Ke Huy Quan', role: 'Waymond Wang', imageUrl: 'https://example.com/ke.jpg' },
        { name: 'Jamie Lee Curtis', role: 'Deirdre Beaubeirdre', imageUrl: 'https://example.com/jamie.jpg' }
      ],
      crew: [
        { name: 'Daniel Kwan', role: 'Director', imageUrl: 'https://example.com/daniel.jpg' },
        { name: 'Daniel Scheinert', role: 'Director', imageUrl: 'https://example.com/daniel_s.jpg' }
      ]
    }
  },
  {
    id: 12,
    title: 'Dune',
    description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 8.0,
    popularity: 90,
    price: 17.99,
    genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2021-10-22',
    trailerUrl: 'https://www.youtube.com/watch?v=8g18jFHCLXk',
    reviews: [],
    tags: ['action', 'drama', 'epic'],
    insights: {
      boxOffice: '$401 million',
      awards: [
        'Academy Award for Best Cinematography',
        'Academy Award for Best Visual Effects',
        'Academy Award for Best Sound'
      ],
      trivia: [
        'Shot in real desert locations in Jordan and UAE',
        'Used minimal green screen effects',
        'Hans Zimmer turned down Tenet to score Dune'
      ],
      cast: [
        { name: 'Timothée Chalamet', role: 'Paul Atreides', imageUrl: 'https://example.com/timothee.jpg' },
        { name: 'Rebecca Ferguson', role: 'Lady Jessica', imageUrl: 'https://example.com/rebecca.jpg' },
        { name: 'Oscar Isaac', role: 'Duke Leto Atreides', imageUrl: 'https://example.com/oscar.jpg' }
      ],
      crew: [
        { name: 'Denis Villeneuve', role: 'Director', imageUrl: 'https://example.com/denis.jpg' },
        { name: 'Hans Zimmer', role: 'Composer', imageUrl: 'https://example.com/hans.jpg' }
      ]
    }
  },
  {
    id: 13,
    title: "Kung Fu Panda 4",
    description: "Po must train a new warrior for his eventual replacement as Dragon Warrior while facing a powerful new villain who can steal kung fu powers.",
    imageUrl: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/kung-fu-panda-4/images/regions/us/onesheet.jpg",
    rating: 7.8,
    popularity: 88,
    price: 19.99,
    genres: ['Animation', 'Action', 'Adventure'],
    industry: 'Hollywood',
    releaseDate: '2024-03-08',
    trailerUrl: 'https://www.youtube.com/watch?v=_inKs4eeHiI',
    reviews: [] as UserReview[],
    tags: ['Animation', 'Action', 'Adventure'],
    insights: {
      boxOffice: "$380 million",
      awards: [],
      trivia: [
        "Fourth installment in the Kung Fu Panda franchise",
        "Features new animation technology for fluid martial arts sequences",
        "Jack Black returns as the voice of Po"
      ],
      cast: [
        { name: "Jack Black", role: "Po", imageUrl: "https://example.com/jack.jpg" },
        { name: "Awkwafina", role: "Zhen", imageUrl: "https://example.com/awkwafina.jpg" },
        { name: "Viola Davis", role: "Chameleon", imageUrl: "https://example.com/viola.jpg" }
      ],
      crew: [
        { name: "Mike Mitchell", role: "Director", imageUrl: "https://example.com/mike.jpg" },
        { name: "Hans Zimmer", role: "Composer", imageUrl: "https://example.com/hans.jpg" }
      ]
    }
  }
];