import { FormEjemplo } from './components/FormEjemplo';
import styled from 'styled-components';

function App() {
  return (
    <Contenedor>
      <FormEjemplo />
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
  margin: 40px;
  width: 90%;
  max-width: 400px;
  background: #fff;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
`;
