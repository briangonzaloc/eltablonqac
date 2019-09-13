from django.db import models
from django.contrib.auth.models import User
from utils.models import TablonBaseModel

class Note(TablonBaseModel):
	user    = models.OneToOneField(User, on_delete=models.CASCADE)
	content = models.TextField(max_length=500, blank=False)