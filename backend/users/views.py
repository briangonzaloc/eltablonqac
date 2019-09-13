from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from django_filters import rest_framework

class UserViewSet(viewsets.ModelViewSet):
	queryset            = User.objects.all()
	serializer_class    = UserSerializer
	permissions_classes = (permissions.IsAuthenticated, )
	
	# filter_backends = (rest_framework.DjangoFilterBackend, )
	# filter_fields   = ('User__username',)