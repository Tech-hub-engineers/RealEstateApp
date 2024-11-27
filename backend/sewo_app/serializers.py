from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth import authenticate

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}


class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")
