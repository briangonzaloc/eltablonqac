from django.contrib import admin
from django.urls import path, include
from users.urls import profiles_urls
from notes.urls import notes_urls
from rest_framework_jwt.views import obtain_jwt_token
from django.conf import settings
from django.conf.urls.static import static
from announcements.urls import announcements_urls

urlpatterns = [
	path('admin/', admin.site.urls),
	path('auth/', obtain_jwt_token),
	path('api/', include(profiles_urls)),
	path('api/', include(notes_urls)),
	path('api/', include(announcements_urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
