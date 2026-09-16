# Task Manager

## Description

A task manager application with CRUD functionality, REST API and PostgreSQL database.

## Features

- Create tasks with a title, optional description, and priority
- Edit existing tasks
- Mark tasks as completed
- Delete individual tasks
- Clear all completed tasks
- Filter tasks by All, Active, or Completed
- Persistent task storage with PostgreSQL

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
npm install
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
npm install
```

If installing the backend packages manually:

```bash
npm install express pg cors dotenv
```

Install the TypeScript development dependencies:

```bash
npm install -D typescript tsx @types/node @types/express @types/cors
```

## Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=task_manager
PORT=3000
```

Use .env.example as a template. It is included in the project.

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
