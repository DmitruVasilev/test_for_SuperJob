import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 41px;
  line-height: 1;
  font-family: 'AkzidenzGroteskPro';
  letter-spacing: -0.05px;
  color: #1a1818;
`;

const App = () => (
  <React.Fragment>
    <Title>Список проектов</Title>
    <Header />
  </React.Fragment>
);

export default App;
