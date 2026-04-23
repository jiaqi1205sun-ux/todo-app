import { useState } from 'react';
import type { Priority } from '../types/todo';

interface TodoInputProps {
  onAdd: (text: string, priority: Priority) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim(), priority);
      setText('');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-section">
      <div className="input-wrapper">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="输入要做的事情..."
        />
        <button className="add-button" onClick={handleSubmit}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div className="priority-selector">
        <label>优先级</label>
        <select value={priority} onChange={e => setPriority(e.target.value as Priority)}>
          <option value="high">🔥 高优先级</option>
          <option value="medium">⭐ 中优先级</option>
          <option value="low">🌸 低优先级</option>
        </select>
      </div>
    </div>
  );
}
