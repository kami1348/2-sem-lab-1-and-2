import { JSX } from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "../components/logo/logo";
import { FullOffer} from "../types/offer";
import { offers } from "../mocks/offers";
import { useParams } from "react-router-dom";
import Error from "./error";
import Map from "../components/map/map";
import { Link } from "react-router-dom";
import ReviewsList from "../components/review-list/review-list";
import { reviews } from "../mocks/review";
import CommentForm from "../components/comment-form/comment-form";


type OfferProps = {
    offers: FullOffer[];

};

function OfferPage({ offers }: OfferProps): JSX.Element {
    const params = useParams();
    const offer = offers.find((item) => item.id.toString() === params.id);

    if (!offer) {
        return <Error />
    }
    const nearbyOffers = offers.filter((item) => item.id !== offer.id).slice(0, 3);
    
    return(
        
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                           <Logo/>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <a className="header__nav-link header__nav-link--profile" href="#">
                                        <div className="header__avatar-wrapper user__avatar-wrapper">
                                        </div>
                                        <span className="header__user-name user__name">Myemail@gmail.com</span>
                                        <span className="header__favorite-count">3</span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.map((item) => (
                                <div key={item} className="offer__image-wrapper">
                                     <img className="offer__image" src={item} alt ="Photo studio"/>
                                     </div>
                                    ))}
                                </div>
                                </div>   
                       
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium ? (
                  <div className="offer__mark">
                  <span>Premium</span>
                </div>) : null
                }
                            <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                {/* Избранное (isFavorite) */}
                <button
                  className={`offer__bookmark-button button ${
                    offer.isFavorite ? "offer__bookmark-button--active" : ""
                  }`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                {/* Рейтинг (rating) */}
                <div className="offer__stars rating__stars">
                  <span
                    style={{ width: `${(offer.rating / 5) * 100}%` }}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {/* Оборудование (goods) */}
                <ul className="offer__inside-list">
                  {offer.goods.map((item, index) => (
                    <li key={index} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                {/* Информация о хозяине (host) */}
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${
                      offer.host.isPro ? "offer__avatar-wrapper--pro" : ""
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {/* {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )} */}
                  <span className="offer__user-status">
                    {offer.host.isPro ? "Pro" : ""}
                  </span>
                </div>
                                {/* Описание (description) */}
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{" "}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
              </section>
              {/* <Offer/> */}
              <CommentForm />
            </div>
          </div>
          <section className="offer__map map">

  <Map
    city={{
      title: offer.city.name,
      lat: offer.city.location.latitude,
      lng: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    }}
    points={[{
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }]}
    selectedPoint={null}
  />
</section>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearby) => (
                <article key={nearby.id} className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <Link to={`/offer/${nearby.id}`}>
                      <img
                        className="place-card__image"
                        src={nearby.images[0]}
                        width="260"
                        height="200"
                        alt="Place image"
                      />
                    </Link>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{nearby.price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{ width: `${(nearby.rating / 5) * 100}%` }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <Link to={`/offer/${nearby.id}`}>{nearby.title}</Link>
                    </h2>
                    <p className="place-card__type">{nearby.type}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
 
