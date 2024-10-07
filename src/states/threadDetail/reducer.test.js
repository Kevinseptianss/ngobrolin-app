/** 
 * test scerario for threadDetail reducer
 * 
 * - threadDetail reducer function
 *  - should return current state when `RECIVE_THREAD` action is dispatch
 *  - should return current state when action unknown is dispatch
 */

import { describe, expect, it } from 'vitest';
import { ActionType } from './action';
import threadDetailReducer from './reducer';

describe('threadDetail function', () => {
    it('should return current state when RECIVE_THREAD action is dispatch', () => {
        const initialState = null;
        const action = { type: ActionType.RECEIVE_THREADDETAIL, payload: { threadDetail: ['thread1', 'thread2', 'thread3'] } }
        const newState = threadDetailReducer(initialState, action);
        expect(newState).toEqual(['thread1', 'thread2', 'thread3']);
    });
    it('returns current state unchanged when unknown action is dispatched', () => {
        const initialState = ['thread1', 'thread2', 'thread3'];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = threadDetailReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
})