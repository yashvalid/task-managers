# Task Manager Server

This is the backend server for the Task Manager application, built with Node.js, Express, and MongoDB.

## Features

- User registration and login with JWT authentication
- Task CRUD (Create, Read, Update, Delete) operations
- Input validation using `express-validator`
- Protected routes for authenticated users

## API Endpoints

### Auth Routes (`/api/auth`)

#### `POST /register`
Register a new user.

**Body:**
```json
{
  "name": "test",
  "email": "test@example.com",
  "password": "test@123"
}
```
**Success Response:**
```json
{
  "message": "Registeration successful"
}
```
**Error Response:**
```json
{
  "error": [
    { "msg": "Email is not valid", "param": "email", ... }
  ]
}
```

---

#### `POST /login`
Login an existing user.

**Body:**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```
**Success Response:**
```json
{
  "message": "Login successfull",
  "token": "<jwt_token>"
}
```
**Error Response:**
```json
{
  "error": "Invalid email"
}
```

---

#### `GET /`
Get authenticated user info.

**Headers:** `Authorization: Bearer <token>`

**Success Response:**
```json
{
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```
**Error Response:**
```json
{
  "error": "user not found"
}
```

---

### Task Routes (`/api/tasks`)

#### `POST /`
Create a new task.

**Headers:** `Authorization: Bearer <token>`
**Body:**
```json
{
  "title": "My Task",
  "description": "Task details",
  "priority": "High"
}
```
**Success Response:**
```json
{
  "newTask": {
    "_id": "task_id",
    "title": "My Task",
    "description": "Task details",
    "priority": "High",
    "user": "user_id"
  }
}
```
**Error Response:**
```json
{
  "errors": [
    { "msg": "Title should be at least 3 characters long", "param": "title", ... }
  ]
}
```

---

#### `GET /`
Get all tasks for the authenticated user.

**Headers:** `Authorization: Bearer <token>`

**Success Response:**
```json
{
  "tasks": [
    {
      "_id": "task_id",
      "title": "My Task",
      "description": "Task details",
      "priority": "High",
      "user": "user_id"
    }
  ]
}
```

---

#### `GET /:id`
Get a specific task by ID.

**Headers:** `Authorization: Bearer <token>`

**Success Response:**
```json
{
  "task": {
    "_id": "task_id",
    "title": "My Task",
    "description": "Task details",
    "priority": "High",
    "user": "user_id"
  }
}
```
**Error Response:**
```json
{
  "error": "No task found"
}
```

---

#### `PUT /:id`
Update a task by ID.

**Headers:** `Authorization: Bearer <token>`
**Body:**
```json
{
  "title": "Updated Task",
  "description": "Updated details",
  "priority": "Low"
}
```
**Success Response:**
```json
{
  "message": "Task updated successfully"
}
```
**Error Response:**
```json
{
  "error": "Failed to update task"
}
```

---

#### `DELETE /:id`
Delete a task by ID.

**Headers:** `Authorization: Bearer <token>`

**Success Response:**
```json
{
  "message": "Task deleted"
}
```
**Error Response:**
```json
{
  "error": "No task found"
}
```

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**  
   Create a `.env` file with the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

3. **Run the server**
   ```bash
   npm start
   ```

## Folder Structure

- `routes/` - Express route definitions
- `controllers/` - Route handler logic
- `middleware/` - Authentication and other middleware
- `models/` - Mongoose models

## License

MIT