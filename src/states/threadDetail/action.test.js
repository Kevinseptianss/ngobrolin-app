/**
 * skenario test
 *
 * - asyncSetRegister thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import api from '../../utils/api';
import { asyncGetThreadDetail, receiveThreadDetailActionCreator } from './action';

const fakeThreadDetailResponse = [
    {
        "status": "success",
        "message": "ok",
        "data": {
            "detailThread": {
                "id": "thread-1",
                "title": "Thread Pertama",
                "body": "Ini adalah thread pertama",
                "category": "General",
                "createdAt": "2021-06-21T07:00:00.000Z",
                "owner": {
                    "id": "users-1",
                    "name": "John Doe",
                    "avatar": "https://generated-image-url.jpg"
                },
                "upVotesBy": [],
                "downVotesBy": [],
                "comments": [
                    {
                        "id": "comment-1",
                        "content": "Ini adalah komentar pertama",
                        "createdAt": "2021-06-21T07:00:00.000Z",
                        "owner": {
                            "id": "users-1",
                            "name": "John Doe",
                            "avatar": "https://generated-image-url.jpg"
                        },
                        "upVotesBy": [],
                        "downVotesBy": []
                    }
                ]
            }
        }
    },
];

describe('asyncGetThreadDetail thunk', () => {
    beforeEach(() => {
        api._getThreadDetail = api.getThreadDetail;
    });

    afterEach(() => {
        api.getThreadDetail = api._getThreadDetail;

        delete api._getThreadDetail;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);
        const dispatch = vi.fn();
        await asyncGetThreadDetail("testing")(dispatch);
        expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse));
    });
});