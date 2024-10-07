/**
 * skenario test
 *
 * - asyncSetRegister thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import api from '../../utils/api';
import { asyncSendThreads, receiveThreadActionCreator } from './action';

const fakeThreadResponse = [
    {
        "status": "success",
        "message": "Thread created",
        "data": {
            "thread": {
                "id": "thread-1",
                "title": "Thread Pertama",
                "body": "Ini adalah thread pertama",
                "category": "General",
                "createdAt": "2021-06-21T07:00:00.000Z",
                "ownerId": "users-1",
                "upVotesBy": [],
                "downVotesBy": [],
                "totalComments": 0
            }
        }
    },
];

describe('asyncSendThreads thunk', () => {
    beforeEach(() => {
        api._createThread = api.createThread;
    });

    afterEach(() => {
        api.createThread = api._createThread;

        delete api._createThread;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        api.createThread = () => Promise.resolve(fakeThreadResponse);
        const dispatch = vi.fn();
        await asyncSendThreads("Title", "Body", "Category")(dispatch);
        expect(dispatch).toHaveBeenCalledWith(receiveThreadActionCreator(fakeThreadResponse));
    });
});