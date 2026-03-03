const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
}

export const getTasks = () => request('/tasks/');

export const createTask = (data) =>
  request('/tasks/', { method: 'POST', body: JSON.stringify(data) });

export const updateTask = (id, data) =>
  request(`/tasks/${id}/`, { method: 'PUT', body: JSON.stringify(data) });

export const toggleTask = (id) =>
  request(`/tasks/${id}/`, { method: 'PATCH' });

export const deleteTask = (id) =>
  request(`/tasks/${id}/`, { method: 'DELETE' });
