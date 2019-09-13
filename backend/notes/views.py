from django.shortcuts import render

from notes.models import Note
from rest_framework import viewsets, permissions, status
from .serializers import NoteSerializer
from django_filters import rest_framework
from rest_framework.response import Response


class NoteViewSet(viewsets.ModelViewSet):
	queryset            = Note.objects.all()
	serializer_class    = NoteSerializer
	permissions_classes = (permissions.IsAuthenticated, )


	def create(self, request, *args, **kwargs):
		serializer = NoteSerializer(
			data = {
				'user'    : self.request.user,
				'content' : request.data['content']
			}
		)
		import pdb; pdb.set_trace();
		serializer.is_valid(raise_exception=True)
		note = serializer.save()
		data = self.get_serializer(note).data
		return Response(data, status = status.HTTP_201_CREATED)
