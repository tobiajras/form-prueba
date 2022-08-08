import styled from 'styled-components';

export const ListaEjemplo = ({ data }) => {
  return (
    <Contenedor>
      {data.map((info, i) => {
        return (
          <DivContenedor key={i}>
            <h2>Proveedor {i + 1}</h2>
            <h2>{info.nombre}</h2>
            <h2>{info.correo}</h2>
          </DivContenedor>
        );
      })}
    </Contenedor>
  );
};

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.7rem;
`;

const DivContenedor = styled.div`
  margin-top: 20px;
`;
