import type { Todo, FilterType } from '../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// 优先级权重
const priorityWeight: Record<Todo['priority'], number> = {
  high: 1,
  medium: 2,
  low: 3
};

export function TodoList({ todos, filter, onToggle, onDelete }: TodoListProps) {
  // 过滤任务
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    return !todo.completed;
  });

  // 排序：未完成在前，然后按优先级高到低
  const sortedTodos = filteredTodos.sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return priorityWeight[a.priority] - priorityWeight[b.priority];
  });

  if (sortedTodos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📝</div>
        <p>{filter === 'all' ? '还没有任务，添加一个吧~' : '没有相关任务'}</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {sortedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
