import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'zh';

type TranslationKey = 
  | 'nav.home' | 'nav.about' | 'nav.login' | 'nav.register' | 'nav.logout' | 'nav.welcome'
  | 'nav.watchlist' | 'nav.recommendations'
  | 'home.title' | 'home.subtitle' | 'home.search'
  | 'home.loadMore'
  | 'movie.book' | 'movie.details' | 'movie.rating' | 'movie.votes' | 'movie.genres'
  | 'movie.release' | 'movie.overview' | 'movie.insights' | 'movie.boxOffice'
  | 'movie.awards' | 'movie.trivia' | 'movie.cast' | 'movie.crew' | 'movie.close'
  | 'booking.title' | 'booking.date' | 'booking.time' | 'booking.seats'
  | 'booking.total' | 'booking.confirm' | 'booking.success'
  | 'booking.close'
  | 'booking.name' | 'booking.email' | 'booking.phone' | 'booking.cancel'
  | 'booking.details' | 'booking.payment' | 'booking.next' | 'booking.back'
  | 'footer.rights' | 'footer.developed'
  | 'login.password' | 'login.error.required' | 'login.error.email' | 'login.error.password'
  | 'login.error.failed'
  | 'movie.watchTrailer'
  | 'movie.watchMovie'
  | 'watchlist.empty'
  | 'watchlist.remove'
  | 'recommendations.title';

interface Translations {
  [key: string]: Partial<Record<TranslationKey, string>>;
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.logout': 'Logout',
    'nav.welcome': 'Welcome, {name}',
    'nav.watchlist': 'Watchlist',
    'nav.recommendations': 'Recommendations',
    
    // Home
    'home.title': 'Discover Your Next Favorite Movie',
    'home.subtitle': 'Search through our collection of movies and find your perfect match',
    'home.search': 'Search movies by title, description, or genre...',
    'home.loadMore': 'Load More',
    
    // Movie
    'movie.book': 'Book Now',
    'movie.details': 'Movie Details',
    'movie.rating': 'Rating',
    'movie.votes': 'votes',
    'movie.genres': 'Genres',
    'movie.release': 'Release Date',
    'movie.overview': 'Overview',
    'movie.insights': 'Movie Insights',
    'movie.boxOffice': 'Box Office',
    'movie.awards': 'Awards',
    'movie.trivia': 'Trivia',
    'movie.cast': 'Cast',
    'movie.crew': 'Crew',
    'movie.close': 'Close',
    'movie.watchTrailer': 'Watch Trailer',
    'movie.watchMovie': 'Watch Movie',
    
    // Booking
    'booking.title': 'Book Your Movie',
    'booking.date': 'Select Date',
    'booking.time': 'Select Time',
    'booking.seats': 'Select Seats',
    'booking.total': 'Total Price',
    'booking.confirm': 'Confirm Booking',
    'booking.success': 'Booking Successful!',
    'booking.close': 'Close',
    'booking.name': 'Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.cancel': 'Cancel',
    'booking.details': 'Booking Details',
    'booking.payment': 'Payment',
    'booking.next': 'Next',
    'booking.back': 'Back',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.developed': 'Developed by',
    
    // Login
    'login.password': 'Password',
    'login.error.required': 'This field is required',
    'login.error.email': 'Please enter a valid email address',
    'login.error.password': 'Password must be at least 6 characters',
    'login.error.failed': 'Failed to login. Please check your credentials.',
    
    // Watchlist
    'watchlist.empty': 'Your watchlist is empty.',
    'watchlist.remove': 'Remove',
    
    // Recommendations
    'recommendations.title': 'Recommended for You',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.login': 'Iniciar sesión',
    'nav.register': 'Registrarse',
    'nav.logout': 'Cerrar sesión',
    'nav.welcome': 'Bienvenido, {name}',
    'nav.watchlist': 'Lista de seguimiento',
    'nav.recommendations': 'Recomendaciones',
    
    // Home
    'home.title': 'Descubre tu próxima película favorita',
    'home.subtitle': 'Busca en nuestra colección de películas y encuentra tu pareja perfecta',
    'home.search': 'Buscar películas por título, descripción o género...',
    'home.loadMore': 'Cargar más',
    
    // Movie
    'movie.book': 'Reservar Ahora',
    'movie.details': 'Detalles de la Película',
    'movie.rating': 'Calificación',
    'movie.votes': 'votos',
    'movie.genres': 'Géneros',
    'movie.release': 'Fecha de Lanzamiento',
    'movie.overview': 'Resumen',
    'movie.insights': 'Detalles de la Película',
    'movie.boxOffice': 'Taquilla',
    'movie.awards': 'Premios',
    'movie.trivia': 'Curiosidades',
    'movie.cast': 'Reparto',
    'movie.crew': 'Equipo',
    'movie.close': 'Cerrar',
    'movie.watchTrailer': 'Ver Tráiler',
    'movie.watchMovie': 'Ver Película',
    
    // Booking
    'booking.title': 'Reserva tu Película',
    'booking.date': 'Seleccionar Fecha',
    'booking.time': 'Seleccionar Hora',
    'booking.seats': 'Seleccionar Asientos',
    'booking.total': 'Precio Total',
    'booking.confirm': 'Confirmar Reserva',
    'booking.success': '¡Reserva Exitosa!',
    'booking.close': 'Cerrar',
    'booking.name': 'Nombre',
    'booking.email': 'Correo',
    'booking.phone': 'Teléfono',
    'booking.cancel': 'Cancelar',
    'booking.details': 'Detalles',
    'booking.payment': 'Pago',
    'booking.next': 'Siguiente',
    'booking.back': 'Atrás',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.developed': 'Desarrollado por',
    
    // Login
    'login.password': 'Contraseña',
    'login.error.required': 'Este campo es obligatorio',
    'login.error.email': 'Por favor ingrese un correo electrónico válido',
    'login.error.password': 'La contraseña debe tener al menos 6 caracteres',
    'login.error.failed': 'Error al iniciar sesión. Por favor verifique sus credenciales.',
    
    // Watchlist
    'watchlist.empty': 'Tu lista está vacía.',
    'watchlist.remove': 'Eliminar',
    
    // Recommendations
    'recommendations.title': 'Recomendado para ti',
  },
  fr: {},
  de: {},
  hi: {},
  zh: {},
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 