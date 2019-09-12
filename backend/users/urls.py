from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)

profiles_urls = [
	url(r'^', include(router.urls)),
]