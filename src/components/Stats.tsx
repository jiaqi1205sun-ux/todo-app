import { useRef, useLayoutEffect } from 'react';
import type { Todo, FilterType } from '../types/todo';
import { useNumberAnimation } from '../hooks/useNumberAnimation';

interface StatsProps {
  todos: Todo[];
  onFilterChange: (filter: FilterType) => void;
  currentFilter: FilterType;
}

export function Stats({ todos, onFilterChange, currentFilter }: StatsProps) {
  const { animateValue } = useNumberAnimation();
  const allRef = useRef<HTMLSpanElement>(null);
  const completedRef = useRef<HTMLSpanElement>(null);
  const pendingRef = useRef<HTMLSpanElement>(null);

  const stats = {
    all: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length
  };

  // 数字动画
  useLayoutEffect(() => {
    allRef.current && animateValue(allRef.current, 0, stats.all, 300);
    completedRef.current && animateValue(completedRef.current, 0, stats.completed, 300);
    pendingRef.current && animateValue(pendingRef.current, 0, stats.pending, 300);
  }, [stats, animateValue]);

  return (
    <div className="stats">
      <div
        className={`stat-item ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        <span className="stat-value all" ref={allRef}>{stats.all}</span>
        <span className="stat-label">全部任务</span>
      </div>
      <div
        className={`stat-item ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        <span className="stat-value completed" ref={completedRef}>{stats.completed}</span>
        <span className="stat-label">已完成</span>
      </div>
      <div
        className={`stat-item ${currentFilter === 'pending' ? 'active' : ''}`}
        onClick={() => onFilterChange('pending')}
      >
        <span className="stat-value pending" ref={pendingRef}>{stats.pending}</span>
        <span className="stat-label">未完成</span>
      </div>
    </div>
  );
}
