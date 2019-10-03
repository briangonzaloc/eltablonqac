from django.db import models
from utils.models import TablonBaseModel
from django.contrib.auth.models import User

class Announcement(TablonBaseModel):
	user    = models.ForeignKey(User, on_delete=models.PROTECT, )
	picture = models.ImageField(
		upload_to='announcements/pictures/',
	)
	title       = models.TextField(max_length=500)
	description = models.TextField(max_length=500, blank=True)
	link        = models.TextField(max_length=500, blank=True)
