import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const CREATE_LINK_MUTATION = gql`
  mutation createCap(
    $adaptacion: String!
    $animacion: String!
    $capitulos: Int!
    $director: String!
    $estudio: String!
    $formato: String!
    $genero: String!
    $temporada: String!
    $titulo: String!
  ) {
    createCap(
      titulo: $titulo
      formato: $formato
      adaptacion: $adaptacion
      director: $director
      animacion: $animacion
      temporada: $temporada
      genero: $genero
      capitulos: $capitulos
      estudio: $estudio
    ) {
      id
      titulo
      formato
      adaptacion
      director
      animacion
      capitulos
      genero
      estudio
      temporada
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    titulo: "",
    temporada: "",
    genero: "",
    capitulos: 0,
    estudio: "",
    director: "",
    animacion: "",
    formato: "",
    adaptacion: "",
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      titulo: formState.titulo,
      temporada: formState.temporada,
      genero: formState.genero,
      capitulos: formState.capitulos,
      estudio: formState.estudio,
      director: formState.director,
      animacion: formState.animacion,
      formato: formState.formato,
      adaptacion: formState.adaptacion,
    },
  onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.titulo}
            onChange={(e) =>
              setFormState({
                ...formState,
                titulo: e.target.value,
              })
            }
            type="text"
            placeholder="El titulo del anime"
          />
          <input
            className="mb2"
            value={formState.temporada}
            onChange={(e) =>
              setFormState({
                ...formState,
                temporada: e.target.value,
              })
            }
            type="text"
            placeholder="La temporada de emision del anime"
          />
          <input
            className="mb2"
            value={formState.genero}
            onChange={(e) =>
              setFormState({
                ...formState,
                genero: e.target.value,
              })
            }
            type="text"
            placeholder="El genero del anime"
          />
          <input
            className="mb2"
            value={formState.capitulos}
            onChange={(e) =>
              setFormState({
                ...formState,
                capitulos: e.target.value,
              })
            }
            type="number"
            placeholder="12"
          />
          <input
            className="mb2"
            value={formState.estudio}
            onChange={(e) =>
              setFormState({
                ...formState,
                estudio: e.target.value,
              })
            }
            type="text"
            placeholder="El nombre del estudio del anime"
          />
          <input
            className="mb2"
            value={formState.director}
            onChange={(e) =>
              setFormState({
                ...formState,
                director: e.target.value,
              })
            }
            type="text"
            placeholder="El director del anime"
          />
          <input
            className="mb2"
            value={formState.animacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                animacion: e.target.value,
              })
            }
            type="text"
            placeholder="El estilo de animacion del anime"
          />
          <input
            className="mb2"
            value={formState.formato}
            onChange={(e) =>
              setFormState({
                ...formState,
                formato: e.target.value,
              })
            }
            type="text"
            placeholder="El tipo del anime"
          />
          <input
            className="mb2"
            value={formState.adaptacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                adaptacion: e.target.value,
              })
            }
            type="text"
            placeholder="El formato de adaptacion del anime"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;
