import * as React from 'react';
import { render } from 'react-dom';
import CssGrid from './components/CssGrid';
import GridItem from './components/GridItem';

const areas = [
  "header header header",
  "area-a area-b area-c",
  "footer footer footer"
];

const layout = {
  areas: [
    "header header header",
    "area-a area-b area-c",
    "footer footer footer"
  ],
  columns: "100px 100px 100px",
  rows: `
    100px 
    100px 
    100px
  `,
};

const App: React.SFC = (): JSX.Element => {
  return (
    <CssGrid rows="100px 100px 100px" columns="100px 100px 100px" areas={areas}>
      <GridItem wrapper="header" area="header"></GridItem>
      <GridItem wrapper="p" area="area-a"></GridItem>
      <GridItem wrapper="p" area="area-b"></GridItem>
      <GridItem wrapper="p" area="area-c"></GridItem>
      <GridItem wrapper="footer" area="footer"></GridItem>
    </CssGrid>
  );
}

render(
  <App />,
  document.getElementById('app')
);