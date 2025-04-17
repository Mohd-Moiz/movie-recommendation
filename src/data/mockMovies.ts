import { Movie, Review } from '../types/Movie';

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
    reviews: [] as Review[],
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
    id: 3,
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
    reviews: [] as Review[],
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
    id: 8,
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
    id: 9,
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
    id: 10,
    title: 'Killers of the Flower Moon',
    description: 'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZGM3MDU2YWQtNDRjYy00YzVjLThkMTYtN2M0ZWE5NGM5YzY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 8.9,
    popularity: 92,
    price: 19.99,
    genres: ['Crime', 'Drama', 'History', 'Thriller'],
    industry: 'Hollywood',
    releaseDate: '2023-10-20',
    trailerUrl: 'https://www.youtube.com/watch?v=EP34Yoxs3FQ',
    reviews: [],
    tags: ['crime', 'drama', 'historical'],
    insights: {
      boxOffice: '$156 million',
      awards: [
        'Academy Award for Best Actress',
        'Golden Globe Award for Best Motion Picture - Drama',
        'BAFTA Award for Best Supporting Actor'
      ],
      trivia: [
        'Martin Scorsese\'s longest film to date at 3 hours and 26 minutes',
        'Leonardo DiCaprio initially wanted to play the FBI agent but switched to the role of Ernest Burkhart',
        'The film features many Osage Nation members in supporting roles'
      ],
      cast: [
        { name: 'Leonardo DiCaprio', role: 'Ernest Burkhart', imageUrl: 'https://example.com/leo.jpg' },
        { name: 'Robert De Niro', role: 'William Hale', imageUrl: 'https://example.com/deniro.jpg' },
        { name: 'Lily Gladstone', role: 'Mollie Burkhart', imageUrl: 'https://example.com/lily.jpg' }
      ],
      crew: [
        { name: 'Martin Scorsese', role: 'Director', imageUrl: 'https://example.com/scorsese.jpg' },
        { name: 'Eric Roth', role: 'Screenwriter', imageUrl: 'https://example.com/roth.jpg' },
        { name: 'Rodrigo Prieto', role: 'Cinematographer', imageUrl: 'https://example.com/prieto.jpg' }
      ]
    }
  }
];