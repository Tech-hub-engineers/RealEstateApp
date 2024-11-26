from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
import json

# POST -- Register
@api_view(['POST'])
def create_user(request):
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login
@api_view(['POST'])
def user_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(email=email, password=password)
    
    if user:
        token, created = Token.objects.get_or_create(user=user)
        # Return the token and a success message
        return Response({
            'message': 'Login successful! Redirecting to home...',
            'token': token.key
        }, status=status.HTTP_200_OK)

    return Response({'errors': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

# LOGOUT User
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            # Delete auth token to log the user out
            request.user.auth_token.delete()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "Error logging out: " + str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Delete User 
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])  # Only authenticated users can delete their profile
def delete_user(request, id):
    try:
        user = UserProfile.objects.get(id=id)
        if user == request.user:  # Only logged-in user can delete their own profile
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"detail": "You can only delete your own profile."}, status=status.HTTP_403_FORBIDDEN)
    except UserProfile.DoesNotExist:
        return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)
