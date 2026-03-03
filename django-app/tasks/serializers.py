from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'completed', 'created_at']
        read_only_fields = ['id', 'created_at']


class TaskUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['title', 'description']


class TaskToggleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['completed']
