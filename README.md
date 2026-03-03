# Task Manager

A full-stack task management app with a Django REST API backend and a React frontend.

---

## Project Structure

```
yahshua/
├── backend/      # Django REST API
└── frontend/     # React app
```

---

## Backend

### Tech Stack

- Python 3.12
- Django 6.0.2
- Django REST Framework 3.16.1
- django-cors-headers 4.9.0
- SQLite

### Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py migrate

# Start the server
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000`.

---

## Frontend

### Tech Stack

- React 19
- react-icons 5
- Native Fetch API

### Setup

```bash
cd frontend

# Install dependencies
pnpm install

# Start the dev server
pnpm start
```

The app will be available at `http://localhost:3000`.

### Environment Variables

REACT_APP_API_URL=http://127.0.0.1:8000

---

## API Endpoints

Base URL: `http://127.0.0.1:8000`

| Method | Endpoint | Description | Body |
|---|---|---|---|
| `GET` | `/tasks/` | List all tasks | — |
| `POST` | `/tasks/` | Create a task | `{ title, description? }` |
| `GET` | `/tasks/<id>/` | Retrieve a task | — |
| `PUT` | `/tasks/<id>/` | Update a task | `{ title, description? }` |
| `PATCH` | `/tasks/<id>/` | Toggle completed | — |
| `DELETE` | `/tasks/<id>/` | Delete a task | — |
