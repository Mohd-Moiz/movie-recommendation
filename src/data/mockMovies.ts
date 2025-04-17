import { Movie, Review } from '../types';

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
    imageUrl: 'https://image.tmdb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
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
        { name: 'Leonardo DiCaprio', role: 'Ernest Burkhart', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Robert De Niro', role: 'William Hale', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Lily Gladstone', role: 'Mollie Burkhart', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Martin Scorsese', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Eric Roth', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Rodrigo Prieto', role: 'Cinematographer', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 12,
    title: 'Poor Things',
    description: 'The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
    rating: 8.7,
    popularity: 90,
    price: 18.99,
    genres: ['Comedy', 'Drama', 'Romance', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2023-12-08',
    trailerUrl: 'https://www.youtube.com/watch?v=RlbR5N6veqw',
    reviews: [],
    tags: ['comedy', 'drama', 'sci-fi'],
    insights: {
      boxOffice: '$112 million',
      awards: [
        'Academy Award for Best Actress',
        'Golden Globe Award for Best Motion Picture - Musical or Comedy',
        'BAFTA Award for Best Production Design'
      ],
      trivia: [
        'Based on the novel by Alasdair Gray',
        'Features elaborate Victorian-era production design',
        'Emma Stone\'s second collaboration with director Yorgos Lanthimos'
      ],
      cast: [
        { name: 'Emma Stone', role: 'Bella Baxter', imageUrl: 'https://image.tmdb.org/t/p/w185/r2J02Z2OpNTctfOSN1aTHxj3C6q.jpg' },
        { name: 'Mark Ruffalo', role: 'Duncan Wedderburn', imageUrl: 'https://image.tmdb.org/t/p/w185/z3dvKqMNeXyY9FfpG1XVFmX3Z4Z.jpg' },
        { name: 'Willem Dafoe', role: 'Dr. Godwin Baxter', imageUrl: 'https://image.tmdb.org/t/p/w185/2Rdd6qXj5zYHv2BkpjkJYGZxTKb.jpg' }
      ],
      crew: [
        { name: 'Yorgos Lanthimos', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Tony McNamara', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 13,
    title: 'Anatomy of a Fall',
    description: 'A woman is suspected of her husband\'s murder, and their blind son faces a moral dilemma as the main witness.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg',
    rating: 8.1,
    popularity: 87,
    price: 15.99,
    genres: ['Crime', 'Drama', 'Thriller'],
    industry: 'French',
    releaseDate: '2023-08-23',
    trailerUrl: 'https://www.youtube.com/watch?v=6qYi5yZQx3I',
    reviews: [],
    tags: ['crime', 'drama', 'thriller'],
    insights: {
      boxOffice: '$35 million',
      awards: [
        'Palme d\'Or at Cannes Film Festival',
        'Golden Globe Award for Best Foreign Language Film',
        'Academy Award for Best Original Screenplay'
      ],
      trivia: [
        'The film\'s dialogue is in French, English, and German',
        'Features a real-life courtroom in the French Alps',
        'The director\'s first feature film in English'
      ],
      cast: [
        { name: 'Sandra Hüller', role: 'Sandra Voyter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Swann Arlaud', role: 'Vincent Renzi', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Milo Machado-Graner', role: 'Daniel Maleski', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Justine Triet', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Arthur Harari', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 14,
    title: 'The Zone of Interest',
    description: 'The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig strive to build a dream life for their family in a house and garden next to the camp.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/hUu9zyZmDd8VZegKi1iK1Vk0RYS.jpg',
    rating: 8.5,
    popularity: 89,
    price: 17.99,
    genres: ['Drama', 'History', 'War'],
    industry: 'British',
    releaseDate: '2023-12-15',
    trailerUrl: 'https://www.youtube.com/watch?v=EP34Yoxs3FQ',
    reviews: [],
    tags: ['drama', 'historical', 'war'],
    insights: {
      boxOffice: '$28 million',
      awards: [
        'Grand Prix at Cannes Film Festival',
        'BAFTA Award for Best British Film',
        'Academy Award for Best International Feature Film'
      ],
      trivia: [
        'Based on the novel by Martin Amis',
        'Filmed on location in Poland',
        'Features minimal dialogue and maximum atmosphere'
      ],
      cast: [
        { name: 'Christian Friedel', role: 'Rudolf Höss', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Sandra Hüller', role: 'Hedwig Höss', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Ralph Herforth', role: 'Gerhard Maurer', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Jonathan Glazer', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Martin Amis', role: 'Novel Author', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 15,
    title: 'Past Lives',
    description: 'Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora\'s family emigrates from South Korea. Twenty years later, they are reunited for one fateful week.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg',
    rating: 8.4,
    popularity: 86,
    price: 16.99,
    genres: ['Drama', 'Romance'],
    industry: 'American',
    releaseDate: '2023-06-02',
    trailerUrl: 'https://www.youtube.com/watch?v=kA244xewjcI',
    reviews: [],
    tags: ['drama', 'romance', 'korean'],
    insights: {
      boxOffice: '$23 million',
      awards: [
        'Independent Spirit Award for Best Feature',
        'Gotham Award for Best International Feature',
        'Academy Award for Best Original Screenplay'
      ],
      trivia: [
        'Celine Song\'s directorial debut',
        'Filmed in both New York and South Korea',
        'Features dialogue in both English and Korean'
      ],
      cast: [
        { name: 'Greta Lee', role: 'Nora', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Teo Yoo', role: 'Hae Sung', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'John Magaro', role: 'Arthur', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Celine Song', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Celine Song', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 16,
    title: 'American Fiction',
    description: 'A frustrated novelist who\'s fed up with the establishment profiting from "Black" entertainment uses a pen name to write a book that propels him into the heart of hypocrisy and the madness he claims to disdain.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/5ynWWapdl45hJXUh0KIevxSG9JQ.jpg',
    rating: 8.2,
    popularity: 85,
    price: 17.99,
    genres: ['Comedy', 'Drama'],
    industry: 'Hollywood',
    releaseDate: '2023-12-15',
    trailerUrl: 'https://www.youtube.com/watch?v=EP34Yoxs3FQ',
    reviews: [],
    tags: ['comedy', 'drama', 'satire'],
    insights: {
      boxOffice: '$18 million',
      awards: [
        'People\'s Choice Award at Toronto International Film Festival',
        'Independent Spirit Award for Best First Feature',
        'Academy Award for Best Adapted Screenplay'
      ],
      trivia: [
        'Based on the novel "Erasure" by Percival Everett',
        'Features a star-studded supporting cast',
        'Addresses themes of race and identity in publishing'
      ],
      cast: [
        { name: 'Jeffrey Wright', role: 'Thelonious "Monk" Ellison', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Tracee Ellis Ross', role: 'Lisa Ellison', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Issa Rae', role: 'Sintara Golden', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Cord Jefferson', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Cord Jefferson', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 17,
    title: 'The Boy and the Heron',
    description: 'A young boy named Mahito yearning for his mother ventures into a world shared by the living and the dead. There, death comes to an end, and life finds a new beginning.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/jDQPkgzerGophKRRn7MKm071vCU.jpg',
    rating: 8.6,
    popularity: 91,
    price: 19.99,
    genres: ['Animation', 'Adventure', 'Fantasy'],
    industry: 'Japanese',
    releaseDate: '2023-12-08',
    trailerUrl: 'https://www.youtube.com/watch?v=EP34Yoxs3FQ',
    reviews: [],
    tags: ['animation', 'fantasy', 'adventure'],
    insights: {
      boxOffice: '$167 million',
      awards: [
        'Academy Award for Best Animated Feature',
        'Golden Globe Award for Best Animated Feature',
        'BAFTA Award for Best Animated Film'
      ],
      trivia: [
        'Hayao Miyazaki\'s first film in 10 years',
        'Features hand-drawn animation',
        'Inspired by the novel "How Do You Live?"'
      ],
      cast: [
        { name: 'Soma Santoki', role: 'Mahito Maki (voice)', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Masaki Suda', role: 'The Gray Heron (voice)', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Aimyon', role: 'Himi (voice)', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Hayao Miyazaki', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Hayao Miyazaki', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 18,
    title: 'Maestro',
    description: 'A love story chronicling the lifelong relationship of conductor-composer Leonard Bernstein and actress Felicia Montealegre Cohn Bernstein.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/auXrHU6O17n9Tz11SHReoorjrU6.jpg',
    rating: 8.0,
    popularity: 84,
    price: 18.99,
    genres: ['Biography', 'Drama', 'Music'],
    industry: 'Hollywood',
    releaseDate: '2023-12-20',
    trailerUrl: 'https://www.youtube.com/watch?v=EP34Yoxs3FQ',
    reviews: [],
    tags: ['biography', 'drama', 'music'],
    insights: {
      boxOffice: '$45 million',
      awards: [
        'Academy Award for Best Actor',
        'Golden Globe Award for Best Actor - Motion Picture Drama',
        'BAFTA Award for Best Makeup and Hair'
      ],
      trivia: [
        'Bradley Cooper\'s second directorial feature',
        'Features extensive makeup to age Cooper into Bernstein',
        'Includes actual recordings of Bernstein\'s performances'
      ],
      cast: [
        { name: 'Bradley Cooper', role: 'Leonard Bernstein', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Carey Mulligan', role: 'Felicia Montealegre', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Matt Bomer', role: 'David Oppenheim', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Bradley Cooper', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Josh Singer', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 19,
    title: 'Barbie',
    description: 'Barbie suffers a crisis that leads her to question her world and her existence.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
    rating: 7.3,
    popularity: 93,
    price: 19.99,
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    industry: 'Hollywood',
    releaseDate: '2023-07-21',
    trailerUrl: 'https://www.youtube.com/watch?v=pBk4NYhWNMM',
    reviews: [],
    tags: ['comedy', 'fantasy', 'adventure'],
    insights: {
      boxOffice: '$1.4 billion',
      awards: [
        'Academy Award for Best Original Song',
        'Golden Globe Award for Best Motion Picture - Musical or Comedy',
        'Critics Choice Award for Best Comedy'
      ],
      trivia: [
        'Greta Gerwig\'s highest-grossing film',
        'Features over 100 different Barbie outfits',
        'The first live-action Barbie movie'
      ],
      cast: [
        { name: 'Margot Robbie', role: 'Barbie', imageUrl: 'https://image.tmdb.org/t/p/w185/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg' },
        { name: 'Ryan Gosling', role: 'Ken', imageUrl: 'https://image.tmdb.org/t/p/w185/1Lh9LER4xRQ3INFFi2dfS2hpRwv.jpg' },
        { name: 'America Ferrera', role: 'Gloria', imageUrl: 'https://image.tmdb.org/t/p/w185/6Dx5R6H0a6QckqFJEmiKr9Q2nAO.jpg' }
      ],
      crew: [
        { name: 'Greta Gerwig', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Noah Baumbach', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 20,
    title: 'The Creator',
    description: 'Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife is recruited to hunt down and kill the Creator.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg',
    rating: 7.2,
    popularity: 87,
    price: 17.99,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2023-09-29',
    trailerUrl: 'https://www.youtube.com/watch?v=ex3C1-5Dhb8',
    reviews: [],
    tags: ['action', 'sci-fi', 'adventure'],
    insights: {
      boxOffice: '$104 million',
      awards: [
        'Academy Award for Best Visual Effects',
        'BAFTA Award for Best Special Visual Effects'
      ],
      trivia: [
        'Shot on location in Thailand',
        'Used practical effects for many scenes',
        'Features a unique blend of Eastern and Western aesthetics'
      ],
      cast: [
        { name: 'John David Washington', role: 'Joshua', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Madeleine Yuna Voyles', role: 'Alphie', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Gemma Chan', role: 'Maya', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Gareth Edwards', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Chris Weitz', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 21,
    title: 'The Marvels',
    description: 'Carol Danvers, Kamala Khan, and Monica Rambeau team up to save the universe.',
    imageUrl: 'https://image.tmdb.org/t/p/original/9Ab63L6ieF0zVHgS2OaPAzKVm1Z.jpg',
    rating: 6.2,
    popularity: 85,
    price: 16.99,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2023-11-10',
    trailerUrl: 'https://www.youtube.com/watch?v=wS_qbDztgVY',
    reviews: [],
    tags: ['action', 'sci-fi', 'superhero'],
    insights: {
      boxOffice: '$206 million',
      awards: [
        'Saturn Award for Best Science Fiction Film',
        'People\'s Choice Award for Best Action Movie'
      ],
      trivia: [
        'First MCU film directed by a woman of color',
        'Features three female leads',
        'Connects to multiple MCU storylines'
      ],
      cast: [
        { name: 'Brie Larson', role: 'Carol Danvers', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Teyonah Parris', role: 'Monica Rambeau', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Iman Vellani', role: 'Kamala Khan', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Nia DaCosta', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Megan McDonnell', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 22,
    title: 'Napoleon',
    description: 'An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg',
    rating: 6.4,
    popularity: 88,
    price: 18.99,
    genres: ['Action', 'Adventure', 'Biography', 'Drama', 'History'],
    industry: 'Hollywood',
    releaseDate: '2023-11-22',
    trailerUrl: 'https://www.youtube.com/watch?v=OAZWXUkrjPc',
    reviews: [],
    tags: ['biography', 'drama', 'historical'],
    insights: {
      boxOffice: '$221 million',
      awards: [
        'Academy Award for Best Visual Effects',
        'BAFTA Award for Best Production Design'
      ],
      trivia: [
        'Ridley Scott\'s first historical epic since Gladiator',
        'Features large-scale battle sequences',
        'Joaquin Phoenix\'s second collaboration with Ridley Scott'
      ],
      cast: [
        { name: 'Joaquin Phoenix', role: 'Napoleon Bonaparte', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Vanessa Kirby', role: 'Josephine Bonaparte', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Tahar Rahim', role: 'Paul Barras', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Ridley Scott', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'David Scarpa', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 23,
    title: 'Wonka',
    description: 'With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.',
    imageUrl: 'https://image.tmdb.org/t/p/original/qhb1qOilapbJxLUTsxH8s8IzRqk.jpg',
    rating: 7.2,
    popularity: 86,
    price: 17.99,
    genres: ['Adventure', 'Comedy', 'Family', 'Fantasy', 'Musical'],
    industry: 'Hollywood',
    releaseDate: '2023-12-15',
    trailerUrl: 'https://www.youtube.com/watch?v=otNh9bTjXUw',
    reviews: [],
    tags: ['comedy', 'fantasy', 'musical'],
    insights: {
      boxOffice: '$632 million',
      awards: [
        'Golden Globe Award for Best Actor - Motion Picture Musical or Comedy',
        'Critics Choice Award for Best Young Actor'
      ],
      trivia: [
        'Prequel to Charlie and the Chocolate Factory',
        'Features original songs',
        'Timothée Chalamet\'s first musical role'
      ],
      cast: [
        { name: 'Timothée Chalamet', role: 'Willy Wonka', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Calah Lane', role: 'Noodle', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Hugh Grant', role: 'Oompa-Loompa', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Paul King', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Simon Farnaby', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 24,
    title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
    description: 'Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games.',
    imageUrl: 'https://image.tmdb.org/t/p/original/mBaXZ95R2OxueDbvbu5AlsjX7gJ.jpg',
    rating: 7.2,
    popularity: 89,
    price: 18.99,
    genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2023-11-17',
    trailerUrl: 'https://www.youtube.com/watch?v=nbN9FkNUfX0',
    reviews: [],
    tags: ['action', 'drama', 'sci-fi'],
    insights: {
      boxOffice: '$337 million',
      awards: [
        'People\'s Choice Award for Best Action Movie',
        'Teen Choice Award for Choice Movie: Action'
      ],
      trivia: [
        'Prequel to The Hunger Games series',
        'Features new cast members',
        'Explores the origins of President Snow'
      ],
      cast: [
        { name: 'Tom Blyth', role: 'Coriolanus Snow', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Rachel Zegler', role: 'Lucy Gray Baird', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Hunter Schafer', role: 'Tigris Snow', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Francis Lawrence', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Michael Lesslie', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 25,
    title: 'The Color Purple',
    description: 'A woman faces many hardships in her life, but ultimately finds extraordinary strength and hope in the unbreakable bonds of sisterhood.',
    imageUrl: 'https://image.tmdb.org/t/p/original/A3Z4pzVt5jzJd96Lt3vNEX0w0Kk.jpg',
    rating: 7.1,
    popularity: 84,
    price: 16.99,
    genres: ['Drama', 'Musical'],
    industry: 'Hollywood',
    releaseDate: '2023-12-25',
    trailerUrl: 'https://www.youtube.com/watch?v=ZJ0PBRSOXCI',
    reviews: [],
    tags: ['drama', 'musical'],
    insights: {
      boxOffice: '$67 million',
      awards: [
        'Golden Globe Award for Best Actress - Motion Picture Musical or Comedy',
        'Critics Choice Award for Best Young Actor'
      ],
      trivia: [
        'Musical adaptation of the novel and film',
        'Features new songs',
        'Produced by Oprah Winfrey and Steven Spielberg'
      ],
      cast: [
        { name: 'Fantasia Barrino', role: 'Celie', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Taraji P. Henson', role: 'Shug Avery', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Danielle Brooks', role: 'Sofia', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'Blitz Bazawule', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Marcus Gardley', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  },
  {
    id: 26,
    title: 'Aquaman and the Lost Kingdom',
    description: 'Aquaman must protect Atlantis and the world from an ancient power unleashed by Black Manta.',
    imageUrl: 'https://image.tmdb.org/t/p/original/7lxfkim5RxDcOkXZQbXwQZn6wTq.jpg',
    rating: 6.5,
    popularity: 87,
    price: 19.99,
    genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    industry: 'Hollywood',
    releaseDate: '2023-12-22',
    trailerUrl: 'https://www.youtube.com/watch?v=FV3bqvOHRQo',
    reviews: [],
    tags: ['action', 'adventure', 'superhero'],
    insights: {
      boxOffice: '$434 million',
      awards: [
        'People\'s Choice Award for Best Action Movie',
        'Teen Choice Award for Choice Movie: Action'
      ],
      trivia: [
        'Sequel to Aquaman (2018)',
        'Features underwater action sequences',
        'Final DCEU film before reboot'
      ],
      cast: [
        { name: 'Jason Momoa', role: 'Arthur Curry / Aquaman', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Patrick Wilson', role: 'Orm Marius / Ocean Master', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'Yahya Abdul-Mateen II', role: 'David Kane / Black Manta', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ],
      crew: [
        { name: 'James Wan', role: 'Director', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' },
        { name: 'David Leslie Johnson-McGoldrick', role: 'Screenwriter', imageUrl: 'https://image.tmdb.org/t/p/w185/8QJQZQZQZQZQZQZQZQZQZQZQZQZ.jpg' }
      ]
    }
  }
];