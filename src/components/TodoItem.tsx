import type { Todo } from '../types/todo';
import { PriorityBadge } from './PriorityBadge';
import { DateTimeDisplay } from './DateTimeDisplay';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-checkbox" onClick={() => onToggle(todo.id)}>
        {todo.completed && <span></span>}
      </div>
      <div className="todo-content">
        <div className="todo-title">{todo.text}</div>
        <div className="todo-meta">
          <PriorityBadge priority={todo.priority} />
          <span>·</span>
          <span className="meta-text"><DateTimeDisplay timestamp={todo.createdAt} /></span>
        </div>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>×</button>
    </li>
  );
}
