/**
 * skenario test
 *
 * - asyncSetRegister thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import api from '../../utils/api';
import { asyncSetRegister, setRegisterActionCreator } from './action';

const fakeRegisterResponse = [
    {
        "status": "success",
        "message": "User created",
        "data": {
            "user": {
                "id": "user-123",
                "name": "John Doe",
                "email": "john@example.com",
                "avatar": "https://generated-image-url.jpg"
            }
        }
    },
];

describe('asyncRegister thunk', () => {
    beforeEach(() => {
        api._register = api.register;
    });

    afterEach(() => {
        api.register = api._register;

        delete api._register;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        api.register = () => Promise.resolve(fakeRegisterResponse);
        const dispatch = vi.fn();
        await asyncSetRegister("test", "testingg@gmail.com", "testing")(dispatch);
        expect(dispatch).toHaveBeenCalledWith(setRegisterActionCreator(fakeRegisterResponse));
    });
});