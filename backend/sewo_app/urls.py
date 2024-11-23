from django.urls import path
from . import views
from .views import UserProfileCreateView

urlpatterns = [
    path('register/', UserProfileCreateView.as_view(), name='register'),
    path('login/', views.login_view, name='login'),
]

