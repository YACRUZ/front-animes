import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AUTH_TOKEN } from '../Constants';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="flex pa3 justify-between nowrap img-background">
      <div className="flex items-center ">
             
        <button className="ml1 no-underline black pinterest-btn pinterest-btn--black" onClick={() => { window.location.href = "/"; }}>
          Lista completa de animes
        </button>
        <div className="ml7"></div>
        <div className="mr-auto">
          <Link to="/" className="no-underline black">
            <div className="fw7 mr5 fg">Animes</div>
          </Link>
        </div>
        <div className="ml7"></div>
        <Link
          to="/create"
          className="ml1 no-underline black"
        >
          <button className="pinterest-btn pinterest-btn--black">
            Agregar nuevo anime
          </button>
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="ml1 no-underline black"
        >
          search
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black"
            >
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            login
          </Link>
          )}
      </div>
    </div>
  );
};

export default Header;