from django.urls import path
from .views import TaskViewSet

urlpatterns = [
    # /tasks/
    path('tasks/', TaskViewSet.as_view({
        'get': 'list',
        'post': 'create',
    })),

    # /tasks/1/
    path('tasks/<int:pk>/', TaskViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update',
        'delete': 'destroy',
    })),
]
