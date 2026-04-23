import { useState } from 'react';
import type { FilterType } from './types/todo';
import { useTodos } from './hooks/useTodos';
import { useNumberAnimation } from './hooks/useNumberAnimation';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Stats } from './components/Stats';
import './App.css';

function App() {
  const { tasks, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');
  const { animateValue } = useNumberAnimation();

  // 处理完成/取消完成
  const handleToggle = (id: number) => {
    toggleTodo(id);
  };

  // 处理删除任务
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  return (
    <div className="container">
      {/* 顶部区域 */}
      <div className="top-section">
        <h1>我的待办 ✨</h1>
        <p>让每一天都有条不紊</p>
      </div>

      {/* 统计面板 */}
      <Stats
        todos={tasks}
        onFilterChange={setCurrentFilter}
        currentFilter={currentFilter}
      />

      {/* 主内容区 */}
      <div className="main-content">
        {/* 添加任务 */}
        <div className="add-card">
          <h2>📝 添加新任务</h2>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="输入要做的事情..."
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  const target = e.currentTarget;
                  const text = target.value.trim();
                  if (text) {
                    addTodo(text, 'medium');
                    target.value = '';
                  }
                }
              }}
            />
            <button className="add-button" onClick={() => {
              const input = document.querySelector<HTMLInputElement>('.add-card input');
              if (input && input.value.trim()) {
                addTodo(input.value.trim(), 'medium');
                input.value = '';
              }
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <div className="priority-selector">
            <label>优先级</label>
            <select className="priority-select">
              <option value="high">🔥 高优先级</option>
              <option value="medium" selected>⭐ 中优先级</option>
              <option value="low">🌸 低优先级</option>
            </select>
          </div>
          <button className="add-full-btn" onClick={() => {
            const input = document.querySelector<HTMLInputElement>('.add-card input');
            if (input && input.value.trim()) {
              addTodo(input.value.trim(), 'medium');
              input.value = '';
            }
          }}>
            添加任务
          </button>
        </div>

        {/* 任务列表 */}
        <ul className="todo-list">
          <TodoList
            todos={tasks}
            filter={currentFilter}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
