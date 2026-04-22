import type { Todo } from '../types/todo';

interface StatsProps {
  todos: Todo[];
  onClearCompleted?: () => void;
}

export function Stats({ todos }: StatsProps) {
  const total = todos.length;
  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="stats">
      <div className="stat-item">
        <span className="stat-value all">{total}</span>
        <span className="stat-label">全部任务</span>
      </div>
      <div className="stat-item">
        <span className="stat-value active">{activeCount}</span>
        <span className="stat-label">进行中</span>
      </div>
      <div className="stat-item">
        <span className="stat-value completed">{completedCount}</span>
        <span className="stat-label">已完成</span>
      </div>
    </div>
  );
}
