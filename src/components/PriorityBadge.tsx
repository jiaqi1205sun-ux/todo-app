import type { Priority } from '../types/todo';

interface PriorityBadgeProps {
  priority: Priority;
}

const priorityColors: Record<Priority, string> = {
  high: '#fed7e2',
  medium: '#fefcbf',
  low: '#bee3f8'
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span
      className="priority-badge"
      style={{
        backgroundColor: priorityColors[priority],
        color: priority === 'high' ? '#f687b3' : priority === 'medium' ? '#ecc94b' : '#63b3ed'
      }}
    >
      {priority === 'high' ? '高' : priority === 'medium' ? '中' : '低'}
    </span>
  );
}
