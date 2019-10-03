from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import AnnouncementViewSet

router = DefaultRouter()
router.register(r'announcements', AnnouncementViewSet)

announcements_urls = [
	url(r'^', include(router.urls)),
]