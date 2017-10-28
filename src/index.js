import React from 'react';
import { render } from 'react-dom';
import CssGrid from './components/CssGrid';

const areas = [
  "area-a area-b",
  "area-c area-d"
];

const App = () => {
  return <CssGrid styles={{ top: 0 }} rows={0} columns="50px 1fr" areas={areas} flow="column" fff="hoge">HOGE</CssGrid>
}

render(
  <App />,
  document.getElementById('app')
);