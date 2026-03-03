from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Task
from .serializers import TaskSerializer, TaskUpdateSerializer, TaskToggleSerializer


class TaskViewSet(viewsets.ViewSet):

    def list(self, request):
        """GET /tasks/ - List all tasks."""
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def create(self, request):
        """POST /tasks/ - Create a new task."""
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """GET /tasks/{id}/ - Retrieve a task by ID."""
        task = get_object_or_404(Task, pk=pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """PUT /tasks/{id}/ - Update title & description."""
        task = get_object_or_404(Task, pk=pk)
        serializer = TaskUpdateSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(TaskSerializer(task).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        """PATCH /tasks/{id}/ - Toggle completed status only."""
        task = get_object_or_404(Task, pk=pk)
        task.completed = not task.completed
        task.save(update_fields=['completed'])
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        """DELETE /tasks/{id}/ - Delete a task."""
        task = get_object_or_404(Task, pk=pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
