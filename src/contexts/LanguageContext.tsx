import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

type TranslationKey = 
  | 'nav.home' | 'nav.about' | 'nav.login' | 'nav.register' | 'nav.logout' | 'nav.welcome'
  | 'home.title' | 'home.subtitle' | 'home.search'
  | 'movie.book' | 'movie.details' | 'movie.rating' | 'movie.votes' | 'movie.genres'
  | 'movie.release' | 'movie.overview' | 'movie.insights' | 'movie.boxOffice'
  | 'movie.awards' | 'movie.trivia' | 'movie.cast' | 'movie.crew' | 'movie.close'
  | 'booking.title' | 'booking.date' | 'booking.time' | 'booking.seats'
  | 'booking.total' | 'booking.confirm' | 'booking.success'
  | 'footer.rights' | 'footer.developed'
  | 'booking.name' | 'booking.email' | 'booking.phone' | 'booking.cancel'
  | 'login.password' | 'login.error.required' | 'login.error.email' | 'login.error.password'
  | 'login.error.failed';

interface Translations {
  [key: string]: {
    [key in TranslationKey]: string;
  };
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
    
    // Home
    'home.title': 'Discover Your Next Favorite Movie',
    'home.subtitle': 'Search through our collection of movies and find your perfect match',
    'home.search': 'Search movies by title, description, or genre...',
    
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
    
    // Booking
    'booking.title': 'Book Your Movie',
    'booking.date': 'Select Date',
    'booking.time': 'Select Time',
    'booking.seats': 'Select Seats',
    'booking.total': 'Total Price',
    'booking.confirm': 'Confirm Booking',
    'booking.success': 'Booking Successful!',
    'booking.name': 'Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.cancel': 'Cancel',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.developed': 'Developed by',
    
    // Login
    'login.password': 'Password',
    'login.error.required': 'This field is required',
    'login.error.email': 'Please enter a valid email address',
    'login.error.password': 'Password must be at least 6 characters',
    'login.error.failed': 'Failed to login. Please check your credentials.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.login': 'Iniciar sesión',
    'nav.register': 'Registrarse',
    'nav.logout': 'Cerrar sesión',
    'nav.welcome': 'Bienvenido, {name}',
    
    // Home
    'home.title': 'Descubre tu próxima película favorita',
    'home.subtitle': 'Busca en nuestra colección de películas y encuentra tu pareja perfecta',
    'home.search': 'Buscar películas por título, descripción o género...',
    
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
    
    // Booking
    'booking.title': 'Reserva tu Película',
    'booking.date': 'Seleccionar Fecha',
    'booking.time': 'Seleccionar Hora',
    'booking.seats': 'Seleccionar Asientos',
    'booking.total': 'Precio Total',
    'booking.confirm': 'Confirmar Reserva',
    'booking.success': '¡Reserva Exitosa!',
    'booking.name': 'Nombre',
    'booking.email': 'Correo',
    'booking.phone': 'Teléfono',
    'booking.cancel': 'Cancelar',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.developed': 'Desarrollado por',
    
    // Login
    'login.password': 'Contraseña',
    'login.error.required': 'Este campo es obligatorio',
    'login.error.email': 'Por favor ingrese un correo electrónico válido',
    'login.error.password': 'La contraseña debe tener al menos 6 caracteres',
    'login.error.failed': 'Error al iniciar sesión. Por favor verifique sus credenciales.',
  }
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
    return translations[language][key] || key;
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