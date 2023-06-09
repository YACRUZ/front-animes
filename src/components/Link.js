import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const Link = ({ link }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useTranslation();
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='text-center'>
      <div onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        <button className="buttontitle">{link.titulo}</button>
      </div >
      {showDetails && (
        <table className='cont-center'>
          <tbody>
            <tr>
              <td>{t("season")}:</td>
              <td>{link.temporada}</td>
            </tr>
            <tr>
              <td>{t("generes")}:</td>
              <td>{link.genero}</td>
            </tr>
            <tr>
              <td>{t("episodes")}:</td>
              <td>{link.capitulos}</td>
            </tr>
            <tr>
              <td>{t("studio")}:</td>
              <td>{link.estudio}</td>
            </tr>
            <tr>
              <td>{t("director")}:</td>
              <td>{link.director}</td>
            </tr>
            <tr>
              <td>{t("animation")}:</td>
              <td>{link.animacion}</td>
            </tr>
            <tr>
              <td>{t("format")}:</td>
              <td>{link.formato}</td>
            </tr>
            <tr>
              <td>{t("adaptation")}:</td>
              <td>{link.adaptacion}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Link;
