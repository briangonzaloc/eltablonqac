from rest_framework import serializers

from users.serializers import UserSerializer
from django.contrib.auth.models import User
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
	user = UserSerializer(read_only=True)

	class Meta:
		model = Note
		fields = "__all__"