from django.shortcuts import render
from rest_framework import generics
from .serializer import UserSignupSerializer

# Create your views here.

class SignupView(generics.CreateAPIView):
    serializer_class = UserSignupSerializer
