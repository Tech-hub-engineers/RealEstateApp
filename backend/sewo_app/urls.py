from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.create_user, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('user/delete/<int:id>/', views.delete_user, name='delete_user'),
]

