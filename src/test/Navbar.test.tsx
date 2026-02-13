import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import Navbar from '../../components/Navbar';

// Mock Logo component as it might have complex SVG/content
vi.mock('../../components/Logo', () => ({
    default: () => <div data-testid="logo">Logo</div>
}));

describe('Navbar Component', () => {
    it('renders navigation links', () => {
        render(<Navbar />);
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it('renders the "Order Now" button', () => {
        render(<Navbar />);
        expect(screen.getByText(/Order Now/i)).toBeInTheDocument();
    });
});
