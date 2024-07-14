import React, { useState, useEffect, KeyboardEvent } from "react";
import { RxCrossCircled } from "react-icons/rx";

interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (text === "") return;
    setTodos([{ text, completed: false }, ...todos]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="flex justify-center flex-row min-h-screen">
      <div className="flex justify-start flex-col min-w-[50vh] max-w-[50vh]">
        <div className="border-solid border-2 border-quinternary p-10 mt-[15vh] rounded-2xl bg-primary max-h-[70vh]">
          <div className="border-solid border-2 border-quinternary p-5 rounded-2xl bg-secondary flex flex-col">
            <p className="text-lg text-center font-extrabold font-mono">
              To-do List
            </p>
            <input
              type="text"
              onKeyDown={handleKeyDown}
              className="bg-quinternary max-w-md px-4 py-1 rounded-md mt-2"
            />
          </div>
          <div>
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="border-solid border-2 border-quinternary my-2 py-1 pl-4 pr-1 h-auto rounded-2xl
                  flex flex-row justify-between font-bold font-mono text-pretty
                  max-w-full
                  bg-[#f76371]
                  "
                >
                  <p className="text-ellipsis overflow-hidden max-w-64">
                    {todo.text}
                  </p>
                  <button onClick={() => removeTodo(index)}>
                    <RxCrossCircled size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
