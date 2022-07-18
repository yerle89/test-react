import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

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



