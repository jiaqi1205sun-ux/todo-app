import type { Todo, FilterType } from '../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, filter, onToggle, onDelete }: TodoListProps) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        <div className="icon">📝</div>
        <p>{filter === 'all' ? '还没有待办事项，添加一个吧！' : '没有相关事项'}</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
