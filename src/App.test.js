import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';

test('renders portfolio hero heading', () => {
  render(
    <HelmetProvider>
      <Header />
    </HelmetProvider>
  );
  const heading = screen.getByText(/Manjitha Kularatne/i);
  expect(heading).toBeInTheDocument();
});
