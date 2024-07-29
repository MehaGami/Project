from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('profile/', views.profile, name='profile'),
    path('api/message/', views.get_message, name='get_message'),
    path('api/remove/', views.remove_message, name='remove_message'),
    path('api/verify/', views.verify_user, name='verify_user'),
]