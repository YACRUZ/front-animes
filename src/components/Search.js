import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import Link from './Link';

const SEARCH_QUERY = gql`
    query caps($search: String!) {
        caps(search: $search) {
          id
          titulo
          fecha
          temporada
          genero
          capitulos
          estudio
          director
          animacion
          formato
          adaptacion
        }
    }
`

const Search = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(SEARCH_QUERY);

  return (
    <>
      <div>
        Search:
        <input
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button
          onClick={() =>
            executeSearch({
              variables: { search: searchFilter }
            })
          }>
          OK
        </button>
      </div>
      {data &&
        data.caps.map((link) => (
          <Link key={link.id} link={link} />
        ))}
    </>
  );
};

export default Search;