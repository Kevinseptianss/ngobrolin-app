/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle Name typing correctly
 *   - should handle Email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { BrowserRouter } from 'react-router-dom';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('LoginInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle username typing correctly', async () => {
        // Arrange
        render(
            <BrowserRouter>
                <RegisterInput register={() => { }} />
            </BrowserRouter>
        );
        const nameInput = await screen.getByPlaceholderText('Nama');

        // Action
        await userEvent.type(nameInput, 'namaku');

        // Assert
        expect(nameInput).toHaveValue('namaku');
    });

    it('should handle Email typing correctly', async () => {
        // Arrange
        render(
            <BrowserRouter>
                <RegisterInput register={() => { }} />
            </BrowserRouter>
        );
        const emailInput = await screen.getByPlaceholderText('Email');

        // Action
        await userEvent.type(emailInput, 'email@gmail.com');

        // Assert
        expect(emailInput).toHaveValue('email@gmail.com');
    });

    it('should handle password typing correctly', async () => {
        // Arrange
        render(
            <BrowserRouter>
                <RegisterInput register={() => { }} />
            </BrowserRouter>
        );
        const passwordInput = await screen.getByPlaceholderText('Password');

        // Action
        await userEvent.type(passwordInput, 'passwordtest');

        // Assert
        expect(passwordInput).toHaveValue('passwordtest');
    });

    it('should call register function when register button is clicked', async () => {
        // Arrange
        const mockLogin = vi.fn();
        render(
            <BrowserRouter>
                <RegisterInput register={mockLogin} />
            </BrowserRouter>
        );
        const nameInput = await screen.getByPlaceholderText('Nama');
        await userEvent.type(nameInput, 'namaku');
        const usernameInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(usernameInput, 'usernametest@gmail.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'passwordtest');
        const registerButton = await screen.getByRole('button', { name: 'Daftar' });

        // Action
        await userEvent.click(registerButton);

        // Assert
        expect(mockLogin).toBeCalledWith({
            name: 'namaku',
            email: 'usernametest@gmail.com',
            password: 'passwordtest',
        });
    });
});