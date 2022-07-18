import React, {useEffect, useState} from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import List from './components/List';
import { getCats } from './services/getCats';
import App from './App';
import {Cat} from "./types/cats";

test('renders learn react link', () => {
  /*render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
  //const aux = getCats();
});

test('new facts buttons loaded', () => {
  render(<Home/>);
  const newFactsButton =  screen.getByTitle('more facts button');
  expect(newFactsButton).toBeInTheDocument();
});



