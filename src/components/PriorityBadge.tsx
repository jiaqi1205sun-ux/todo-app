import type { Priority } from '../types/todo';

interface PriorityBadgeProps {
  priority: Priority;
}

const priorityConfig = {
  high: { label: '高', className: 'priority-high' },
  medium: { label: '中', className: 'priority-medium' },
  low: { label: '低', className: 'priority-low' }
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const config = priorityConfig[priority];
  return <span className={`priority-badge ${config.className}`}>{config.label}</span>;
}