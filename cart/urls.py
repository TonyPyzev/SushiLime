from django.conf.urls import include, url
from django.urls.conf import path
from . import views

urlpatterns = [
    path('', views.buscket, name='buscket'),
    path('order/', views.order, name='order'),
    # This pattern must always be the last
    url('', include('easycart.urls'))
]