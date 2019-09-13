from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet

router = DefaultRouter()
router.register(r'notes', NoteViewSet)

notes_urls = [
	url(r'^', include(router.urls)),
]