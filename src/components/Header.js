import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../Constants';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";


const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="flex pa3 justify-between nowrap img-background">
      <div className="flex items-center ">

        <button className="ml1 no-underline black pinterest-btn pinterest-btn--black" onClick={() => { window.location.href = "/"; }}>
          {t('complete list of anime')}
        </button>
        <div className=""></div>
        <div className="mr-auto">
          <Link to="/" className="no-underline black">
            <div className="fw7 mr5 fg">Animes</div>
          </Link>
        </div>
        <Link
          to="/search"
          className="pinterest-btn pinterest-btn--black no-underline black"
        >
          search
        </Link>

        {authToken && (
          <div className="flex">
            <div className=""></div>
            <Link
              to="/create"
              className=" no-underline black"
            >
              <button className="pinterest-btn pinterest-btn--black">
                {t("add new anime")}
              </button>
            </Link>
            <Link
              to="/openai"
              className=" no-underline black"
            >
              <button className="pinterest-btn pinterest-btn--black">
                {t("OpenAi")}
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        <div className=" pointer black">
          {t('select_language')}
        </div>
        <div className=" pointer black"> : </div>
        <div>
          <LanguageSelect className=" pointer black" />
        </div>
      </div>

      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="pinterest-btn pinterest-btn--black pointer black"
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
            className="pinterest-btn pinterest-btn--black no-underline black"
          >
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;