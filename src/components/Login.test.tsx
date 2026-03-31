import { render, screen } from '@testing-library/react';
import Login from './Login';
import { describe, expect, test } from 'vitest';

const renderComponent = () => {
    render(
        <Login />
    )
}

describe('Login Component', () => {
    test('renders EasyLeave title', () => {
        renderComponent();
        expect(screen.getByText('EasyLeave')).toBeInTheDocument();
    });

    test('renders Google sign in button with Google Logo', () => {
        renderComponent();
        expect(screen.getByText('Sign in with Google')).toBeInTheDocument();

        const image = screen.getByAltText('Google Logo');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'GoogleLogo.png');
    });

    test('button is clickable', () => {
        renderComponent();
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});