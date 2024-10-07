const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {threads}} = responseJson;

    return threads;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {users}} = responseJson;

    return users;
  }

  async function getAllLeaderBoards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {leaderboards}} = responseJson;

    return leaderboards;
  }

  async function getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {detailThread}} = responseJson;

    return detailThread;
  }

  async function login({email, password}) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {token}} = responseJson;

    return token;
  }

  async function register({name, email, password}) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {user}} = responseJson;

    return user;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {user}} = responseJson;

    return user;
  }

  async function createThread({title, category, body}) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: body,
        category: category,
      }),
    });

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {thread}} = responseJson;

    return thread;
  }

  async function createComment({threadId, content}) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
      }),
    });

    const responseJson = await response.json();

    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {data: {comment}} = responseJson;

    return comment;
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  return {
    getAllThreads,
    getAllUsers,
    getAllLeaderBoards,
    getThreadDetail,
    login,
    register,
    getOwnProfile,
    createThread,
    createComment,
    getAccessToken,
    putAccessToken,
  };
})();

export default api;