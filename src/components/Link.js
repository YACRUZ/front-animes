import React, { useState } from 'react';

const Link = ({ link }) => {
  const [showDetails, setShowDetails] = useState(false);

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
              <td>Temporada:</td>
              <td>{link.temporada}</td>
            </tr>
            <tr>
              <td>Género:</td>
              <td>{link.genero}</td>
            </tr>
            <tr>
              <td>Capítulos:</td>
              <td>{link.capitulos}</td>
            </tr>
            <tr>
              <td>Estudio:</td>
              <td>{link.estudio}</td>
            </tr>
            <tr>
              <td>Director:</td>
              <td>{link.director}</td>
            </tr>
            <tr>
              <td>Animación:</td>
              <td>{link.animacion}</td>
            </tr>
            <tr>
              <td>Formato:</td>
              <td>{link.formato}</td>
            </tr>
            <tr>
              <td>Adaptación:</td>
              <td>{link.adaptacion}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Link;
