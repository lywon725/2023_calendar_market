import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle.js';


function App() {
  const Text = styled.h4`
  font-family: 'JejuMyeongjo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  
  color: #000000;
`

  return (
      <div className="App">
        <GlobalStyle />
          <Text>헤더</Text>
          <div>안녕하세요</div>
      </div>
  );
}

export default App;
