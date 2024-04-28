# Task Manager API

This repository contains a simple Express.js API for managing tasks. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks stored in memory.

## Setup

1. **Install Dependencies**: Make sure you have Node.js installed on your machine. Then, run `npm install` to install all required dependencies.

2. **Run the Server**: Execute `node app.js` or `npm run start` to start the server. By default, the server runs on port 5000.

## Endpoints

- **GET /tasks**: Fetches all tasks.
- **GET /tasks/:id**: Fetches a specific task by its ID.
- **POST /tasks**: Creates a new task.
- **PUT /tasks/:id**: Updates an existing task.
- **DELETE /tasks/:id**: Deletes a task by its ID.
