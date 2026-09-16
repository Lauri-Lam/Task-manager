# Task Manager

## Description

A full-stack task management application with CRUD functionality, a REST API, and persistent PostgreSQL storage.

## Features

- Create tasks with a title, optional description, and priority
- Edit existing tasks
- Mark tasks as completed
- Delete individual tasks
- Clear all completed tasks
- Filter tasks by All, Active, or Completed
- Persistent task storage with PostgreSQL
- Centralized frontend API communication and error handling

## Technologies

### Frontend

- React
- TypeScript
- Vite
- Bootstrap

### Backend

- Node.js
- Express
- TypeScript
- PostgreSQL
- pg
- CORS
- dotenv

## Installation

Before running the application, make sure you have the following installed:

- Node.js
- npm
- PostgreSQL

### Frontend

The frontend is built with:

- React
- TypeScript
- Vite
- Bootstrap

Navigate to the frontend folder:

```bash
cd frontend
```

Install the dependencies:

```bash
npm ci
```

Start the frontend development server:

```bash
npm run dev
```

### Backend

The backend uses:

- Node.js
- Express
- TypeScript
- PostgreSQL
- pg for PostgreSQL connections and connection pooling
- CORS
- dotenv

Navigate to the backend folder:

```bash
cd backend
```

Install the dependencies:

```bash
npm ci
```

If you need to reinstall the backend packages manually:

```bash
npm install express pg cors dotenv
```

Install the TypeScript development dependencies:

```bash
npm install -D typescript tsx @types/node @types/express @types/cors @types/pg
```

## Environment Variables

Create a `.env` file inside the backend folder.
You can use the included `.env.example` file as a template.

Example:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=task_manager
```

## PostgreSQL Database

Make sure PostgreSQL is running and create the database used by the application.

For example:

```sql
CREATE DATABASE task_manager;
```

Then run the SQL from:

```text
backend/schema.sql
```

to create the required tables.

## Running the Application

Run the backend in one terminal:

```bash
cd backend
npm run dev
```

Run the frontend in another terminal:

```bash
cd frontend
npm run dev
```

The frontend and backend must both be running for the application to work.

## API Endpoints

```ts
GET    /tasks
POST   /tasks
PATCH  /tasks/:id
DELETE /tasks/:id
DELETE /tasks/completed
```

## Project Structure

<!-- 
+ Task-manager/
  + frontend/
    + src/
      + api/
        + tasks.ts
      + components/
        + AddTaskForm.tsx
        + ClearCompletedButton.tsx
        + TaskFilter.tsx
        + TaskItem.tsx
        + TaskManager.tsx
      + types/
        + task.ts
      + App.tsx
      + main.tsx
    + index.html
  + backend/
    + src/
      + db.ts
      + server.ts
    + schema.sql
    + .env.example
  + shared/
    + task.ts
  + README.md
-->

```text
Task-manager/
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── tasks.ts
│   │   ├── components/
│   │   │   ├── AddTaskForm.tsx
│   │   │   ├── ClearCompletedButton.tsx
│   │   │   ├── TaskFilter.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   └── TaskManager.tsx
│   │   ├── types/
│   │   │   └── task.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
├── backend/
│   ├── src/
│   │   ├── db.ts
│   │   └── server.ts
│   ├── schema.sql
│   └── .env.example
├── shared/
│   └── task.ts
└── README.md
```

## Updates

### Task Manager 1.1

- Added Bootstrap styling
- Improved UI layout
- Renamed variables for better readability and consistency

### Task Manager 1.2

- Created `frontend/src/api/tasks.ts`
- Moved HTTP request logic out of `TaskManager.tsx`
- Added reusable API functions for:
  - loading tasks
  - creating tasks
  - updating tasks
  - deleting tasks
  - clearing completed tasks
- Replaced direct `fetch` calls in `TaskManager.tsx` with reusable API functions
- Centralized API error handling with `handleError()`
- Added `showError()` for displaying and automatically clearing error messages
- Reduced duplicated error-handling code
- Improved separation between API logic and React UI/state logic
- Improved code readability and maintainability
