import { useLocalStorage } from './useLocalStorage';
import type { Todo, Priority } from '../types/todo';

const STORAGE_KEY = 'tasks'; // 与原HTML保持一致

export function useTodos() {
  const [tasks, setTasks] = useLocalStorage<Todo[]>(STORAGE_KEY, []);

  const addTodo = (text: string, priority?: Priority) => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      priority: priority || 'medium',
      createdAt: new Date().toISOString()
    };

    setTasks([...tasks, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTasks(tasks.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTasks(tasks.filter(todo => todo.id !== id));
  };

  return {
    tasks,
    addTodo,
    toggleTodo,
    deleteTodo
  };
}
