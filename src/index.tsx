import * as React from 'react';
import { render } from 'react-dom';
import CssGrid from './components/CssGrid';

const areas = [
  "area-a area-b",
  "area-c area-d"
];

const App = () => {
  return <CssGrid />
}

render(
  <CssGrid />,
  document.getElementById('app')
);