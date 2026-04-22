import { useState } from 'react';
import type { FilterType } from './types/todo';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Filters } from './components/Filters';
import { Stats } from './components/Stats';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <div className="container">
      <div className="header">
        <h1>待办事项</h1>
        <p>管理你的日常任务</p>
      </div>

      <TodoInput onAdd={addTodo} />
      <Filters filter={filter} onFilterChange={setFilter} />
      <TodoList todos={todos} filter={filter} onToggle={toggleTodo} onDelete={deleteTodo} />
      <Stats todos={todos} onClearCompleted={clearCompleted} />
    </div>
  );
}

export default App;