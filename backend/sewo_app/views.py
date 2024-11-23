from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializer
import json

class UserProfileCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserProfileSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return JsonResponse({'message': 'User registered successfully!'}, status=status.HTTP_201_CREATED)

        return JsonResponse({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode('utf-8'))
            email = data.get('email')
            password = data.get('password')
            remember_me = data.get('remember_me', False)

            print(f"Received data: email={email}, password={password}, remember_me={remember_me}")

            if not email or not password:
                return JsonResponse({"errors": "Email and password are required."}, status=400)

            try:
                user = UserProfile.objects.get(email=email) 
            except UserProfile.DoesNotExist:
                return JsonResponse({"errors": "User with this email does not exist."}, status=400)

            user = authenticate(request, username=email, password=password)

            if user is not None:
                login(request, user)

                if remember_me:
                    request.session.set_expiry(1209600)  # Expire session after two weeks
                else:
                    request.session.set_expiry(0)  # Session expires when the browser is closed

                return JsonResponse({"message": "Login successful!"}, status=200)
            else:
                return JsonResponse({"errors": "Invalid email or password."}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({"errors": "Invalid JSON format."}, status=400)

    return JsonResponse({"errors": "Only POST method is allowed."}, status=405)
