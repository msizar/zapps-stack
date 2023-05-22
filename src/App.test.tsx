import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo on nav bar homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(new RegExp('Stackerz', 'i'));
  expect(linkElement).toBeInTheDocument();
});
