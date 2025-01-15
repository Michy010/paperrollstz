from django.urls import path
from . import views

app_name = 'paperrollswebsite'

urlpatterns = [
    path('', views.index, name='home'),
]