from rest_framework import serializers

from users.serializers import UserSerializer
from .models import Announcement

class AnnouncementSerializer(serializers.ModelSerializer):
	user = UserSerializer(read_only=True)

	class Meta:
		model = Announcement
		fields = "__all__"
