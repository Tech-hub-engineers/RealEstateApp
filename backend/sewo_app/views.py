from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserProfileSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save() 
            return JsonResponse({'message': 'User registered successfully!'}, status=status.HTTP_201_CREATED)

        return JsonResponse({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
