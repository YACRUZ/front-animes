import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.titulo} ({link.temporada}) ({link.genero}) ({link.capitulos}) ({link.estudio}) ({link.director}) ({link.animacion})
        ({link.formato}) ({link.adaptacion})
      </div>
    </div>
  );
};

export default Link;