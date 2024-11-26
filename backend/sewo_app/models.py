from django.db import models

# Create your models here.

class UserProfile(models.Model):
    fname = models.CharField(max_length=50)
    origin = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)
    remember_me = models.BooleanField(default=False)

    def __str__(self):
        return self.fname
