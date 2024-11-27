from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import UserProfile
from rest_framework import status
from .serializers import *
from knox.models import AuthToken
from knox.auth import TokenAuthentication

from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User


class ReactView(APIView):
    serializer = UserProfileSerializer

    # POST -- Register
    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            return Response({
            "user": UserProfileSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
        return Response(serializer.data)
    
    def get(self, request):
        detail = [ {"fname": detail.fname,"origin": detail.origin} 
        for detail in UserProfile.objects.all()]
        return Response(detail)
    



class LoginView(APIView):
  def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            # Generate token with Knox
            token = AuthToken.objects.create(user)
            return Response({
                'token': token[0],  # Send the token back to the user
                'message': "Login successful!"
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'detail': "Invalid credentials"
            }, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    # POST -- Logout
    def post(self, request):
        if request.user.is_authenticated:
            logout(request)
            return Response({"message": "Logout successful!"}, status=200)
        else:
            raise AuthenticationFailed('User is not authenticated.')
        

class ProtectedView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            'message': 'You are authenticated!',
            'user': request.user.username
        })
        
