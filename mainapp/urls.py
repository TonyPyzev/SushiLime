from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('categories', views.categories, name='categories'),
    path('categories/<str:slug>', views.menu, name='menu'),
    path('categories/<str:parent_slug>/<str:slug>/', views.description, name='description'),
    path('about-us', views.aboutUs, name='aboutus'),
    path('contacts', views.contacts, name='contacts'),
]
