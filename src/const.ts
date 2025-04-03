import Favorites from "./pages/favorites";
import Login from "./pages/login";
import { CityOffer } from "./types/offer";

export const Setting = {
    rentOffersCount: 312,
} as const;

export const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer/:id',
} as const;

 export const AutorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',

} 

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

  const CITIES_LOCATION: CityOffer[] = [
    {
      name: "Paris",
      location: {
        latitude: 48.5112,
        longitude: 2.2055,
        zoom: 8,
      },
    },
    {
      name: "Cologne",
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    {
      name: "Brussels",
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    {
      name: "Amsterdam",
      location: {
        latitude: 52.2206,
        longitude: 4.5322,
        zoom: 8,
      },
    },
    {
      name: "Humburg",
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    {
      name: "Dusseldorg",
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
  ];
  export { CITIES_LOCATION };
  
  const SortOffersType = {
    Popular: 'Popular',
    PriceToHight: 'Price: low to high',
    PriceToLow: 'Price: high to low',
    TopRated: 'Top rated first',
  };
  export {SortOffersType}