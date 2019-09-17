from django.db import models
from django.contrib.auth.models import User
from utils.models import TablonBaseModel

class Note(TablonBaseModel):
	user    = models.ForeignKey(User, on_delete=models.PROTECT, )
	content = models.TextField(blank=False)