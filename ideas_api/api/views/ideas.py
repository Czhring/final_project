from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializers.idea import IdeaSerializer
from ..models.idea import Idea

class IdeasView(APIView):
    def post(self, request):
        # Add the user id as owner
        request.data['owner'] = request.user.id
        idea = IdeaSerializer(data=request.data)
        if idea.is_valid():
            idea.save()
            return Response(idea.data, status=status.HTTP_201_CREATED)
        else:
            return Response(idea.errors, status=status.HTTP_400_BAD_REQUEST)  

    def get(self, request):
        # filter for ideas with our user id
        ideas = Idea.objects.filter(owner=request.user.id)
        data = IdeaSerializer(ideas, many=True).data
        return Response(data)

    