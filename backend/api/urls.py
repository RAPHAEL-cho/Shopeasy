from django.urls import path
from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView
from . import views

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('signup/', views.signup, name='signup'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
]








