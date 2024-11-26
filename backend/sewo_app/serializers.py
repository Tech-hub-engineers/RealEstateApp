from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = UserProfile(
            email=validated_data['email']
        )
        user.hash_password(validated_data['password'])
        user.save()
        return user
