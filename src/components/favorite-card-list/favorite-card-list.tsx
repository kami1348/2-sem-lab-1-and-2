import { OffersList } from "../../types/offer";
import FavoriteCard from "../favorite-card/favorite-card";

type FavoriteCardListProps = {
  offersList: OffersList[];
};

function FavoriteCardList({ offersList }: FavoriteCardListProps) {
  const groupedOffers = offersList.reduce((acc, offer) => {
    const city = offer.city.name; 
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {} as Record<string, OffersList[]>);

  return (
    <>
      {Object.entries(groupedOffers).map(([city, offers]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) => (
              <FavoriteCard
                key={offer.id}
                id={offer.id}
                title={offer.title}
                type={offer.type}
                price={offer.price}
                previewImage={offer.previewImage}
                isPrimium={offer.isPremium}
                rating={offer.rating}
              />
            ))}
          </div>
        </li>
      ))}
    </>
  );
}

export { FavoriteCardList };