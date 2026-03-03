import { useState, useEffect, useCallback } from 'react';
import { getTasks, createTask, updateTask, toggleTask, deleteTask } from './api/tasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch {
      setError('Failed to load tasks. Is the server running?');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  async function handleCreate(data) {
    try {
      const task = await createTask(data);
      setTasks((prev) => [...prev, task]);
    } catch {
      setError('Failed to create task.');
    }
  }

  async function handleUpdate(data) {
    try {
      const updated = await updateTask(editTask.id, data);
      setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
      setEditTask(null);
    } catch {
      setError('Failed to update task.');
    }
  }

  async function handleToggle(id) {
    try {
      const updated = await toggleTask(id);
      setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    } catch {
      setError('Failed to toggle task.');
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      setError('Failed to delete task.');
    }
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>

      {error && (
        <div className="error">
          {error}
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}

      <TaskForm
        editTask={editTask}
        onSubmit={editTask ? handleUpdate : handleCreate}
        onCancel={() => setEditTask(null)}
      />

      {loading ? (
        <p className="loading">Loading tasks…</p>
      ) : (
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onEdit={setEditTask}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
