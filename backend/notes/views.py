from django.shortcuts import render

from notes.models import Note
from rest_framework import viewsets, permissions, status
from .serializers import NoteSerializer
from django_filters import rest_framework
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.files.storage import FileSystemStorage



class NoteViewSet(viewsets.ModelViewSet):
	queryset            = Note.objects.all()
	serializer_class    = NoteSerializer
	permissions_classes = (permissions.IsAuthenticated, )

	def get_serializer_context(self):
		"""Add user to serializer context """
		context = super(NoteViewSet, self).get_serializer_context()
		context['user'] = self.request.user
		return context

	def create(self, request, *args, **kwargs):
		context = self.get_serializer_context()
		serializer = NoteSerializer(
			data=request.data,
			context=context
		)
		serializer.is_valid(raise_exception=True)
		# import pdb; pdb.set_trace();
		note = serializer.save()
		data = self.get_serializer(note).data
		return Response(data, status = status.HTTP_201_CREATED)

	@action(detail=False, methods=['post'])
	def upload(self, request, *args, **kwargs):
		myfile = request.FILES['image']
		fs = FileSystemStorage()
		filename = fs.save(myfile.name, myfile)
		uploaded_file_url = fs.url(filename)
		# import pdb; pdb.set_trace();

		response = { 'data': { 'link': uploaded_file_url }}
		return Response(response, status=status.HTTP_200_OK)