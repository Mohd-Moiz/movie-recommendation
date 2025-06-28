import React from 'react';
import { Metadata } from 'next';
import { AuthProvider } from '../src/contexts/AuthContext';
import { ThemeContextProvider } from '../src/contexts/ThemeContext';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { WatchlistProvider } from '../src/contexts/WatchlistContext';
import { SocialFeedProvider } from '../src/contexts/SocialFeedContext';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export const metadata: Metadata = {
  title: 'Movie Recommendations',
  description: 'Discover and book your favorite movies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <LanguageProvider>
            <AuthProvider>
              <SocialFeedProvider>
                <WatchlistProvider>
                  <Header />
                  <main>{children}</main>
                  <Footer />
                </WatchlistProvider>
              </SocialFeedProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
} 