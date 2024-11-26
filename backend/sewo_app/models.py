from django.db import models
import bcrypt

# Create your models here.

class UserProfile(models.Model):
    fname = models.CharField(max_length=50)
    origin = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)
    remember_me = models.BooleanField(default=False)

    def hash_password(self, raw_password):
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(raw_password.encode('utf-8'), salt)
        self.password = hashed_password.decode('utf-8')  # Store the hashed password

    def check_password(self, raw_password):
        return bcrypt.checkpw(raw_password.encode('utf-8'), self.password.encode('utf-8'))


    def __str__(self):
        return self.fname
