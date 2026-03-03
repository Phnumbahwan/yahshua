# Django Tasks API

A simple REST API for managing tasks, built with Django and Django REST Framework.

## Tech Stack

- Python 3.12
- Django 6.0.2
- Django REST Framework 3.16.1
- SQLite

## Project Structure

```
django-app/
├── manage.py
├── db.sqlite3
├── myapp/               # Project config
│   ├── settings.py
│   └── urls.py
└── tasks/               # Tasks app
    ├── models.py
    ├── serializers.py
    ├── views.py
    └── urls.py
```

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd django-app
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install django djangorestframework
```

### 4. Run migrations

```bash
python manage.py migrate
```

### 5. Start the server

```bash
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks/` | List all tasks |
| POST | `/tasks/` | Create a new task |
| GET | `/tasks/<id>/` | Retrieve a task |
| PUT | `/tasks/<id>/` | Update title & description |
| PATCH | `/tasks/<id>/` | Toggle completed status |
| DELETE | `/tasks/<id>/` | Delete a task |

---

## Usage Examples

### Create a task
```bash
curl -X POST http://127.0.0.1:8000/tasks/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy milk", "description": "From the store"}'
```

### List all tasks
```bash
curl http://127.0.0.1:8000/tasks/
```

### Retrieve a task
```bash
curl http://127.0.0.1:8000/tasks/1/
```

### Update a task
```bash
curl -X PUT http://127.0.0.1:8000/tasks/1/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy oat milk", "description": "Organic"}'
```

### Toggle completed
```bash
curl -X PATCH http://127.0.0.1:8000/tasks/1/
```

### Delete a task
```bash
curl -X DELETE http://127.0.0.1:8000/tasks/1/
```

---

## Browsable API

DRF provides a built-in UI for testing endpoints.
Open `http://127.0.0.1:8000/tasks/` in your browser while the server is running.
