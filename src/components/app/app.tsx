import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import Favorites from "../../pages/favorites";
import Login from "../../pages/login";
import Offer from "../../pages/offer";
import NotFound from "../../pages/error";
import { JSX } from "react";
import { AppRoute } from "../../const";
import {AutorizationStatus} from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer } from "../../types/offer";
import { OffersList } from "../../types/offer";
import { Review } from "../../types/review";

type AppMainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
  reviews: Review[];
};

function App({ rentalOffersCount, offers,offersList }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />}
        />
        <Route path={AppRoute.Favorites} element={<PrivateRoute autorizationStatus={AutorizationStatus.NoAuth} > <Favorites/> </PrivateRoute>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer offers={offers} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
</BrowserRouter>
  );
}

export default App;