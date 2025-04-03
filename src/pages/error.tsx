import { JSX } from "react";
import { Logo } from "../components/logo/logo";

function Error(): JSX.Element {
    return(
        <div className="page page--gray page--main">
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
      <main>
        <div>
          <h1 className="favorites__title">404-Страница не найдена</h1>
          <h2 className="offer__host-title">К сожалению, запрашиваемая вами страница не найдена и находится на доработке.</h2>
        </div>  </main>
    </div>
  );
}
export default Error;