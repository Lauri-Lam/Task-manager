import type { Task, AddTaskData, UpdateTaskData } from "../../../shared/task";
import type { ErrorMessage, TaskResponse } from "../types/task";

const BASE_URL = `http://localhost:3000/tasks`;

export async function loadTasks(): Promise<Task[]> {
  const response = await fetch(BASE_URL, {
    method: "GET",
  });

  if (!response.ok) {
    const errorMessage: ErrorMessage = await response.json();
    throw new Error(errorMessage.message);
  }

  const loadedTasks: Task[] = await response.json();

  return loadedTasks;
}

export async function addTask(data: AddTaskData): Promise<Task> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const responseData: ErrorMessage = await response.json();
    throw new Error(responseData.message);
  }

  const responseData: TaskResponse = await response.json();

  const task: Task = responseData.task;
  return task;
}

export async function updateTask(
  id: number,
  data: UpdateTaskData,
): Promise<Task> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ErrorMessage = await response.json();
    throw new Error(errorData.message);
  }

  const responseData: TaskResponse = await response.json();

  const updatedTask: Task = responseData.task;

  return updatedTask;
}

export async function deleteTask(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData: ErrorMessage = await response.json();
    throw new Error(errorData.message);
  }
}

export async function clearCompleted(): Promise<void> {
  const response = await fetch(`${BASE_URL}/completed`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorData: ErrorMessage = await response.json();
    throw new Error(errorData.message);
  }
}
