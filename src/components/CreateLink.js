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
    onCompleted: () => navigate("/"),
  });

  return (
    <div className="cont-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
        <label className="label-input">
            Titulo:
            <input
              className="mb2 input-pinterest"
              value={formState.titulo}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  titulo: e.target.value,
                })
              }
              type="text"
              placeholder="Kill la Kill"
            />
          </label>
          <label className="label-input">
            Temporada:
            <input
              className="mb2 input-pinterest"
              value={formState.temporada}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  temporada: e.target.value,
                })
              }
              type="text"
              placeholder="Otoño 2013"
            />
          </label>
          <label className="label-input">
            Genero:
            <input
              className="mb2 input-pinterest"
              value={formState.genero}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  genero: e.target.value,
                })
              }
              type="text"
              placeholder="Acción"
            />
          </label>
          <label className="label-input">
            Capitulos:
            <input
              className="mb2 input-pinterest"
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
          </label>
          <label className="label-input">
            Estudio:
            <input
              className="mb2 input-pinterest"
              value={formState.estudio}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  estudio: e.target.value,
                })
              }
              type="text"
              placeholder="Trigger"
            />
          </label>
          <label className="label-input">
            Director:
            <input
              className="mb2 input-pinterest"
              value={formState.director}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  director: e.target.value,
                })
              }
              type="text"
              placeholder="Hiroyuki Imaishi"
            />
          </label>
          <label className="label-input">
            Animación:
            <input
              className="mb2 input-pinterest"
              value={formState.animacion}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  animacion: e.target.value,
                })
              }
              type="text"
              placeholder="2d"
            />
          </label>
          <label className="label-input">
            Formato:
            <input
              className="mb2 input-pinterest"
              value={formState.formato}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  formato: e.target.value,
                })
              }
              type="text"
              placeholder="Serie"
            />
          </label>
          <label className="label-input">
            Adaptación:
            <input
              className="mb2 input-pinterest"
              value={formState.adaptacion}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  adaptacion: e.target.value,
                })
              }
              type="text"
              placeholder="Original"
            />
          </label>
        </div>
        <button type="submit" className="buttontitle cont-center">Guardar</button>
      </form>
    </div>
  );
};

export default CreateLink;
