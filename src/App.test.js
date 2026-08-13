// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainRise title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainRise/i);
    expect(titleElement).toBeInTheDocument();
});
