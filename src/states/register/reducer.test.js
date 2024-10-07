/** 
 * test scerario for register reducer
 * 
 * - register reducer function
 *  - should return current state when `SET_REGISTER` action is dispatch
 *  - should return current state when action unknown is dispatch
 */

import { describe, expect, it } from 'vitest';
import { ActionType } from './action';
import registerReducer from './reducer';

describe('register function', () => {
    it('should return current state when SET_REGISTER action is dispatch', () => {
        const initialState = null;
        const action = { type: ActionType.SET_REGISTER, payload: { authUser: ['user1', 'user2', 'user3'] } }
        const newState = registerReducer(initialState, action);
        expect(newState).toEqual(['user1', 'user2', 'user3']);
    });
    it('returns current state unchanged when unknown action is dispatched', () => {
        const initialState = ['user1', 'user2', 'user3'];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = registerReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
})