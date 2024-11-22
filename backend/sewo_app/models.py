from django.db import models

# Create your models here.

class UserProfile(models.Model):
    fname = models.CharField(max_length=255)
    origin = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    remember_me = models.BooleanField(default=False)

    def __str__(self):
        return self.fname
