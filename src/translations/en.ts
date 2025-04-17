export const en = {
  nav: {
    home: 'Home',
    login: 'Login',
    register: 'Register',
    about: 'About',
    profile: 'Profile',
    logout: 'Logout'
  },
  login: {
    title: 'Login',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
    signInWithGoogle: 'Sign in with Google',
    noAccount: "Don't have an account?",
    forgotPassword: 'Forgot Password?'
  },
  register: {
    title: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    signUp: 'Sign Up',
    haveAccount: 'Already have an account?',
    signInWithGoogle: 'Sign in with Google'
  },
  booking: {
    title: 'Book Your Movie',
    date: 'Select Date',
    time: 'Select Time',
    seats: 'Number of Seats',
    name: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    total: 'Total Price',
    cancel: 'Cancel',
    confirm: 'Confirm Booking'
  },
  movie: {
    rating: 'Rating',
    insights: 'Movie Insights',
    boxOffice: 'Box Office',
    awards: 'Awards',
    trivia: 'Trivia',
    cast: 'Cast',
    crew: 'Crew',
    close: 'Close',
    book: 'Book Now'
  },
  errors: {
    emailRequired: 'Email is required',
    emailInvalid: 'Invalid email address',
    passwordRequired: 'Password is required',
    passwordLength: 'Password must be at least 6 characters',
    passwordMatch: 'Passwords do not match',
    genericError: 'Something went wrong'
  }
} as const;

export type TranslationKey = keyof typeof en;
