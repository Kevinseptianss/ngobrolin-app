/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle Email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';
import { BrowserRouter } from 'react-router-dom';

expect.extend(matchers);

describe('LoginInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle username typing correctly', async () => {
        // Arrange
        render(
            <BrowserRouter>
                <LoginInput login={() => { }} />
            </BrowserRouter>
        );
        const usernameInput = await screen.getByPlaceholderText('Email');

        // Action
        await userEvent.type(usernameInput, 'email@gmail.com');

        // Assert
        expect(usernameInput).toHaveValue('email@gmail.com');
    });

    it('should handle password typing correctly', async () => {
        // Arrange
        render(
            <BrowserRouter>
                <LoginInput login={() => { }} />
            </BrowserRouter>
        );
        const passwordInput = await screen.getByPlaceholderText('Password');

        // Action
        await userEvent.type(passwordInput, 'passwordtest');

        // Assert
        expect(passwordInput).toHaveValue('passwordtest');
    });

    it('should call login function when login button is clicked', async () => {
        // Arrange
        const mockLogin = vi.fn();
        render(
            <BrowserRouter>
                <LoginInput login={mockLogin} />
            </BrowserRouter>
        );
        const usernameInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(usernameInput, 'usernametest@gmail.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'passwordtest');
        const loginButton = await screen.getByRole('button', { name: 'Masuk' });

        // Action
        await userEvent.click(loginButton);

        // Assert
        expect(mockLogin).toBeCalledWith({
            email: 'usernametest@gmail.com',
            password: 'passwordtest',
        });
    });
});