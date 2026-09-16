import { useState, useEffect, useCallback } from "react";
import type {
  Task,
  TaskPrio,
  AddTaskData,
  UpdateTaskData,
} from "../../../shared/task.ts";
import AddTaskForm from "./AddTaskForm";
import TaskFilter from "./TaskFilter";
import type { FilterType } from "./TaskFilter";
import ClearCompletedButton from "./ClearCompletedButton";
import TaskItem from "./TaskItem";
import {
  loadTasks,
  addTask,
  updateTask,
  deleteTask,
  clearCompleted,
} from "../api/tasks.ts";

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPriority, setEditPriority] = useState<TaskPrio>("medium");
  const [editDescription, setEditDescription] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  const showError = useCallback((errorMessage: string) => {
    setError(errorMessage);
    setTimeout(() => {
      setError(null);
    }, 3500);
  }, []);

  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      showError(error.message);
    } else {
      showError("No response from backend");
    }
  }, [showError]);

  const handleStartEdit = (task: Task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setEditDescription(task.description ?? "");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
    setEditPriority("medium");
    setError(null);
  };

  const handleSaveEdit = async (id: number) => {
    try {
      if (editTitle.trim() === "") {
        setEditTitle("");
        showError("Empty title not allowed.");
        return;
      }

      const data: UpdateTaskData = {
        title: editTitle.trim(),
        priority: editPriority,
        description: editDescription.trim(),
      };

      const updatedTask: Task = await updateTask(id, data);

      setTasks((currentTasks) =>
        currentTasks.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          }
          return task;
        }),
      );

      setEditingId(null);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const handleAddTask = async (data: AddTaskData) => {
    try {
      const newTask: Task = await addTask(data);

      setTasks((currentTasks) => [...currentTasks, newTask]);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const handleCompleteTask = async (id: number) => {
    try {
      const data: UpdateTaskData = { completed: true };

      const updatedTask: Task = await updateTask(id, data);

      setTasks((currentTasks) =>
        currentTasks.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          }
          return task;
        }),
      );
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const handleClearCompleted = async () => {
    try {
      await clearCompleted();

      setTasks((currentTasks) =>
        currentTasks.filter((task) => !task.completed),
      );
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);

      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        setLoading(true);
        const loadedTasks = await loadTasks();

        setTasks(loadedTasks);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };
    getTasks();
  }, [handleError]);

  return (
    <div className="container mt-4" style={{ minWidth: "700px" }}>
      <div className="card shadow-sm rounded-3">
        <div className="card-body">
          <h1 className="mb-4">Task Manager</h1>
          <div>
            {error && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-start bg-dark bg-opacity-50"
                style={{ zIndex: 1055 }}
              >
                <div className="alert alert-danger mt-5">{error}</div>
              </div>
            )}
          </div>
          {loading && <p className="text-secondary">Loading tasks...</p>}
          <div className="d-flex gap-2 mb-4">
            <ClearCompletedButton onClearCompleted={handleClearCompleted} />
            <TaskFilter onFilterChange={setFilter} filter={filter} />
          </div>
          <ul className="list-group mb-4">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                editingId={editingId}
                editTitle={editTitle}
                editDescription={editDescription}
                editPriority={editPriority}
                onEditTitleChange={setEditTitle}
                onEditDescriptionChange={setEditDescription}
                onEditPriorityChange={setEditPriority}
                onComplete={handleCompleteTask}
                onDelete={handleDeleteTask}
                onStartEdit={handleStartEdit}
                onSaveEdit={handleSaveEdit}
                onCancelEdit={handleCancelEdit}
              />
            ))}
          </ul>
          <AddTaskForm onAdd={handleAddTask} />
        </div>
      </div>
    </div>
  );
}
