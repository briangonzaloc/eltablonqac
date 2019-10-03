from rest_framework import viewsets, permissions
from .serializers import AnnouncementSerializer
from .models import Announcement

class AnnouncementViewSet(viewsets.ModelViewSet):
	queryset            = Announcement.objects.all()
	serializer_class    = AnnouncementSerializer
	permissions_classes = (permissions.IsAuthenticated, )