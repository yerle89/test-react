import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import App from "./App";

test('renders learn react link', () => {
  /*render(<App />);
  const linkElement = screen.getByText(/Random List of Cats Facts/i);
  expect(linkElement).toBeInTheDocument();*/
});

test('new facts buttons loaded', () => {
  render(<Home/>);
  const newFactsButton =  screen.getByTitle('more facts button');
  expect(newFactsButton).toBeInTheDocument();
});



