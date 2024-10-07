const getData = () => {
  return {
    'status': 'success',
    'message': 'ok',
    'data': {
      'threads': [
        {
          'id': 'thread-1',
          'title': 'Random Thread 1',
          'body': 'This is a random thread body 1',
          'category': 'General',
          'createdAt': '2021-06-21T07:00:00.000Z',
          'ownerId': 'users-1',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-2',
          'title': 'Another Random Thread',
          'body': 'This is another random thread body',
          'category': 'Technology',
          'createdAt': '2021-06-22T08:00:00.000Z',
          'ownerId': 'users-3',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-3',
          'title': 'Random Thread 3',
          'body': 'This is a random thread body 3',
          'category': 'Sports',
          'createdAt': '2021-06-23T09:00:00.000Z',
          'ownerId': 'users-4',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-4',
          'title': 'Thread Four',
          'body': 'This is a random thread body 4',
          'category': 'General',
          'createdAt': '2021-06-24T10:00:00.000Z',
          'ownerId': 'users-5',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-5',
          'title': 'Random Thread 5',
          'body': 'This is a random thread body 5',
          'category': 'Entertainment',
          'createdAt': '2021-06-25T11:00:00.000Z',
          'ownerId': 'users-6',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-6',
          'title': 'Thread Six',
          'body': 'This is a random thread body 6',
          'category': 'Technology',
          'createdAt': '2021-06-26T12:00:00.000Z',
          'ownerId': 'users-7',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-7',
          'title': 'Random Thread 7',
          'body': 'This is a random thread body 7',
          'category': 'Sports',
          'createdAt': '2021-06-27T13:00:00.000Z',
          'ownerId': 'users-8',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-8',
          'title': 'Thread Eight',
          'body': 'This is a random thread body 8',
          'category': 'General',
          'createdAt': '2021-06-28T14:00:00.000Z',
          'ownerId': 'users-9',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-9',
          'title': 'Random Thread 9',
          'body': 'This is a random thread body 9',
          'category': 'Entertainment',
          'createdAt': '2021-06-29T15:00:00.000Z',
          'ownerId': 'users-10',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
        {
          'id': 'thread-10',
          'title': 'Thread Ten',
          'body': 'This is a random thread body 10',
          'category': 'Technology',
          'createdAt': '2021-06-30T16:00:00.000Z',
          'ownerId': 'users-11',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0,
        },
      ],
    },
  };
};

const getLeader = () => {
  return {
    'status': 'success',
    'message': 'ok',
    'data': {
      'leaderboards': [
        {
          'user': {
            'id': 'users-3',
            'name': 'Emily Chen',
            'email': 'emily@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 8,
        },
        {
          'user': {
            'id': 'users-4',
            'name': 'Michael Brown',
            'email': 'michael@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 12,
        },
        {
          'user': {
            'id': 'users-5',
            'name': 'Sarah Lee',
            'email': 'sarah@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 7,
        },
        {
          'user': {
            'id': 'users-6',
            'name': 'David Kim',
            'email': 'david@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 9,
        },
        {
          'user': {
            'id': 'users-7',
            'name': 'Olivia Martin',
            'email': 'olivia@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 11,
        },
        {
          'user': {
            'id': 'users-8',
            'name': 'Kevin White',
            'email': 'kevin@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 6,
        },
        {
          'user': {
            'id': 'users-9',
            'name': 'Jessica Hall',
            'email': 'jessica@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 4,
        },
        {
          'user': {
            'id': 'users-10',
            'name': 'Christopher Davis',
            'email': 'christopher@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 3,
        },
        {
          'user': {
            'id': 'users-11',
            'name': 'Amanda Taylor',
            'email': 'amanda@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 2,
        },
        {
          'user': {
            'id': 'users-12',
            'name': 'Matthew Walker',
            'email': 'matthew@example.com',
            'avatar': 'https://generated-image-url.jpg',
          },
          'score': 1,
        },
      ],
    },
  };
};

function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  } if (diffHours > 0) {
    return `${diffHours} hours ago`;
  } if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  } if (diffSeconds > 0) {
    return `${diffSeconds} seconds ago`;
  }
  return 'just now';
}
export {getData, getLeader, postedAt};
