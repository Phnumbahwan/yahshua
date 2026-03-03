import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        title="Toggle completed"
      />
      <div className="task-body">
        <span className="task-title">{task.title}</span>
        {task.description && (
          <span className="task-desc">{task.description}</span>
        )}
      </div>
      <div className="task-actions">
        <button className="btn-icon" onClick={() => onEdit(task)} title="Edit">
          <FiEdit2 size={16} />
        </button>
        <button className="btn-icon btn-danger" onClick={() => onDelete(task.id)} title="Delete">
          <FiTrash2 size={16} />
        </button>
      </div>
    </div>
  );
}
