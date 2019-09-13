from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):

	class Meta:
		model = Profile
		fields = '__all__'


class UserSerializer(serializers.HyperlinkedModelSerializer):
	profile = ProfileSerializer(read_only=True)

	class Meta:
		model = User
		fields = (
			'username', 
			'first_name', 
			'last_name', 
			'email', 
			'is_staff',
			'profile'
		)


