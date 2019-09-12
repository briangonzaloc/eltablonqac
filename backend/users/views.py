from django.shortcuts import render

from .models import Profile
from rest_framework import viewsets, permissions
from .serializers import ProfileSerializer
from django_filters import rest_framework

class ProfileViewSet(viewsets.ModelViewSet):
	queryset            = Profile.objects.all()
	serializer_class    = ProfileSerializer
	permissions_classes = (permissions.IsAuthenticated, )
	
	filter_backends = (rest_framework.DjangoFilterBackend, )
	filter_fields   = ('username',)