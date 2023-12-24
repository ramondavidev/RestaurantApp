import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import { Navigation } from './src/infrastructure/navigation';

import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBf1n0TU1SxASBj8bBFaj9FmIQvcYcoYvk',
  authDomain: 'mealstogo-26cc0.firebaseapp.com',
  projectId: 'mealstogo-26cc0',
  storageBucket: 'mealstogo-26cc0.appspot.com',
  messagingSenderId: '193485309928',
  appId: '1:193485309928:web:aa0ead9a33945936ff065d',
};
const app = initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
