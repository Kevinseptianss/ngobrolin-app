/** 
 * test scerario for thread reducer
 * 
 * - thread reducer function
 *  - should return current state when `RECIVE_THREAD` action is dispatch
 *  - should return empty state when `RESET_THREAD` action is dispatch
 *  - should return current state when action unknown is dispatch
 */

import { describe, expect, it } from 'vitest';
import { ActionType } from './action';
import threadReducer from './reducer';

describe('reducer function', () => {
    it('should return current state when RECIVE_THREAD action is dispatch', () => {
        const initialState = null;
        const action = { type: ActionType.RECEIVE_THREAD, payload: { thread: ['thread1', 'thread2', 'thread3'] } }
        const newState = threadReducer(initialState, action);
        expect(newState).toEqual(['thread1', 'thread2', 'thread3']);
    });
    it('returns null when RESET_THREAD action is dispatched', () => {
        const initialState = ['thread1', 'thread2', 'thread3'];
        const action = { type: ActionType.RESET_THREAD };
        const newState = threadReducer(initialState, action);
        expect(newState).toBeNull();
    });

    it('returns current state unchanged when unknown action is dispatched', () => {
        const initialState = ['thread1', 'thread2', 'thread3'];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = threadReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
})