import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const priorityLabels: Record<Todo['priority'], string> = {
  high: '工作',
  medium: '个人',
  low: '健康'
};

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-checkbox" onClick={() => onToggle(todo.id)}>
        {todo.completed && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <div className="todo-content">
        <div className="todo-title">{todo.text}</div>
        <div className="todo-meta">
          <span className={`priority-tag ${todo.priority}`}>{priorityLabels[todo.priority]}</span>
          <span className="meta-text">今天</span>
        </div>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>×</button>
    </div>
  );
}
