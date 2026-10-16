// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecoderScore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecoderScore/i);
    expect(titleElement).toBeInTheDocument();
});
