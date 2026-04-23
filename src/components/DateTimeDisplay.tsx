import { formatDate } from '../utils/dateFormatter';

interface DateTimeDisplayProps {
  timestamp: string;
}

export function DateTimeDisplay({ timestamp }: DateTimeDisplayProps) {
  return <span>{formatDate(timestamp)}</span>;
}
