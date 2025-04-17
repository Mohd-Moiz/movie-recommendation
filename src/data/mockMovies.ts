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
  },
  {
    id: 11,
    title: 'The Holdovers',
    description: 'A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWY2YzA0Y2UtYjJkYy00YjM4LThkY2QtYjE0ZDRhYzY4YzM0XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
    rating: 8.3,
    popularity: 88,
    price: 16.99,
    genres: ['Comedy', 'Drama'],
    industry: 'Hollywood',
    releaseDate: '2023-10-27',
    trailerUrl: 'https://www.youtube.com/watch?v=QwQw0tTQY1Y',
    reviews: [],
    tags: ['comedy', 'drama', 'holiday'],
    insights: {
      boxOffice: '$42 million',
      awards: [
        'Academy Award for Best Supporting Actress',
        'Golden Globe Award for Best Actor - Motion Picture Musical or Comedy'
      ],
      trivia: [
        'Paul Giamatti\'s first collaboration with director Alexander Payne since Sideways',
        'Set in the 1970s, the film features authentic period details',
        'Filmed on location in Massachusetts'
      ],
      cast: [
        { name: 'Paul Giamatti', role: 'Paul Hunham', imageUrl: 'https://example.com/giamatti.jpg' },
        { name: 'Da\'Vine Joy Randolph', role: 'Mary Lamb', imageUrl: 'https://example.com/randolph.jpg' },
        { name: 'Dominic Sessa', role: 'Angus Tully', imageUrl: 'https://example.com/sessa.jpg' }
      ],
      crew: [
        { name: 'Alexander Payne', role: 'Director', imageUrl: 'https://example.com/payne.jpg' },
        { name: 'David Hemingson', role: 'Screenwriter', imageUrl: 'https://example.com/hemingson.jpg' }
      ]
    }
  },
  {
    id: 12,
    title: 'Poor Things',
    description: 'The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjMtNDU3MC00YWQxLTk5ZTUtYmMxOWRlNmY2NzFhXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
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
        { name: 'Emma Stone', role: 'Bella Baxter', imageUrl: 'https://example.com/stone.jpg' },
        { name: 'Mark Ruffalo', role: 'Duncan Wedderburn', imageUrl: 'https://example.com/ruffalo.jpg' },
        { name: 'Willem Dafoe', role: 'Dr. Godwin Baxter', imageUrl: 'https://example.com/dafoe.jpg' }
      ],
      crew: [
        { name: 'Yorgos Lanthimos', role: 'Director', imageUrl: 'https://example.com/lanthimos.jpg' },
        { name: 'Tony McNamara', role: 'Screenwriter', imageUrl: 'https://example.com/mcnamara.jpg' }
      ]
    }
  },
  {
    id: 13,
    title: 'Anatomy of a Fall',
    description: 'A woman is suspected of her husband\'s murder, and their blind son faces a moral dilemma as the main witness.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BODZmNzYxZjEtZGE1MS00M2Q2LTg0YTQtZjM5Y2U4NjdjMjU3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
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
        { name: 'Sandra Hüller', role: 'Sandra Voyter', imageUrl: 'https://example.com/huller.jpg' },
        { name: 'Swann Arlaud', role: 'Vincent Renzi', imageUrl: 'https://example.com/arlaud.jpg' },
        { name: 'Milo Machado-Graner', role: 'Daniel Maleski', imageUrl: 'https://example.com/machado.jpg' }
      ],
      crew: [
        { name: 'Justine Triet', role: 'Director', imageUrl: 'https://example.com/triet.jpg' },
        { name: 'Arthur Harari', role: 'Screenwriter', imageUrl: 'https://example.com/harari.jpg' }
      ]
    }
  },
  {
    id: 14,
    title: 'The Zone of Interest',
    description: 'The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig strive to build a dream life for their family in a house and garden next to the camp.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTU5N2Y5YjQtYzU0Zi00Y2Q5LTg4YzYtYzY0YjQ5YzY0YzY0XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
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
        { name: 'Christian Friedel', role: 'Rudolf Höss', imageUrl: 'https://example.com/friedel.jpg' },
        { name: 'Sandra Hüller', role: 'Hedwig Höss', imageUrl: 'https://example.com/huller2.jpg' },
        { name: 'Ralph Herforth', role: 'Gerhard Maurer', imageUrl: 'https://example.com/herforth.jpg' }
      ],
      crew: [
        { name: 'Jonathan Glazer', role: 'Director', imageUrl: 'https://example.com/glazer.jpg' },
        { name: 'Martin Amis', role: 'Novel Author', imageUrl: 'https://example.com/amis.jpg' }
      ]
    }
  },
  {
    id: 15,
    title: 'Past Lives',
    description: 'Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora\'s family emigrates from South Korea. Twenty years later, they are reunited for one fateful week.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTg2Zjg0YjAtYzUwYi00YjVjLWE3YzctM2Y2YzE2Y2Y2Y2Y2XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
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
        { name: 'Greta Lee', role: 'Nora', imageUrl: 'https://example.com/lee.jpg' },
        { name: 'Teo Yoo', role: 'Hae Sung', imageUrl: 'https://example.com/yoo.jpg' },
        { name: 'John Magaro', role: 'Arthur', imageUrl: 'https://example.com/magaro.jpg' }
      ],
      crew: [
        { name: 'Celine Song', role: 'Director', imageUrl: 'https://example.com/song.jpg' },
        { name: 'Celine Song', role: 'Screenwriter', imageUrl: 'https://example.com/song.jpg' }
      ]
    }
  },
  {
    id: 16,
    title: 'American Fiction',
    description: 'A frustrated novelist who\'s fed up with the establishment profiting from "Black" entertainment uses a pen name to write a book that propels him into the heart of hypocrisy and the madness he claims to disdain.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTg2Zjg0YjAtYzUwYi00YjVjLWE3YzctM2Y2YzE2Y2Y2Y2Y2XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
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
        { name: 'Jeffrey Wright', role: 'Thelonious "Monk" Ellison', imageUrl: 'https://example.com/wright.jpg' },
        { name: 'Tracee Ellis Ross', role: 'Lisa Ellison', imageUrl: 'https://example.com/ross.jpg' },
        { name: 'Issa Rae', role: 'Sintara Golden', imageUrl: 'https://example.com/rae.jpg' }
      ],
      crew: [
        { name: 'Cord Jefferson', role: 'Director', imageUrl: 'https://example.com/jefferson.jpg' },
        { name: 'Cord Jefferson', role: 'Screenwriter', imageUrl: 'https://example.com/jefferson.jpg' }
      ]
    }
  },
  {
    id: 17,
    title: 'The Boy and the Heron',
    description: 'A young boy named Mahito yearning for his mother ventures into a world shared by the living and the dead. There, death comes to an end, and life finds a new beginning.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWM3MDU2YWQtNDRjYy00YzVjLThkMTYtN2M0ZWE5NGM5YzY0XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
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
        { name: 'Soma Santoki', role: 'Mahito Maki (voice)', imageUrl: 'https://example.com/santoki.jpg' },
        { name: 'Masaki Suda', role: 'The Gray Heron (voice)', imageUrl: 'https://example.com/suda.jpg' },
        { name: 'Aimyon', role: 'Himi (voice)', imageUrl: 'https://example.com/aimyon.jpg' }
      ],
      crew: [
        { name: 'Hayao Miyazaki', role: 'Director', imageUrl: 'https://example.com/miyazaki.jpg' },
        { name: 'Hayao Miyazaki', role: 'Screenwriter', imageUrl: 'https://example.com/miyazaki.jpg' }
      ]
    }
  },
  {
    id: 18,
    title: 'Maestro',
    description: 'A love story chronicling the lifelong relationship of conductor-composer Leonard Bernstein and actress Felicia Montealegre Cohn Bernstein.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTg2Zjg0YjAtYzUwYi00YjVjLWE3YzctM2Y2YzE2Y2Y2Y2Y2XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
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
        { name: 'Bradley Cooper', role: 'Leonard Bernstein', imageUrl: 'https://example.com/cooper.jpg' },
        { name: 'Carey Mulligan', role: 'Felicia Montealegre', imageUrl: 'https://example.com/mulligan.jpg' },
        { name: 'Matt Bomer', role: 'David Oppenheim', imageUrl: 'https://example.com/bomer.jpg' }
      ],
      crew: [
        { name: 'Bradley Cooper', role: 'Director', imageUrl: 'https://example.com/cooper.jpg' },
        { name: 'Josh Singer', role: 'Screenwriter', imageUrl: 'https://example.com/singer.jpg' }
      ]
    }
  }
];