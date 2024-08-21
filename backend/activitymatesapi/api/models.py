from email.policy import default
from enum import Enum
from django.db import models
from uuid import uuid4
from django.utils import timezone
# Create your models here.


class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    full_name = models.CharField(max_length=250)
    phone_number = models.CharField(max_length=250, default="")
    email = models.EmailField()
    country = models.CharField(max_length=250, default="")
    city =  models.CharField(max_length=250, default="")
    date_of_birth = models.DateField()
    groups = models.ManyToManyField('Group', through='GroupMembership')
    events = models.ManyToManyField('Events', through='EventRegistration')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "users"



class AgeIntervalEnum(str, Enum):
    A = "18-25"
    B = "18-35"
    C = "25-35"
    D = "35-50"
    E = "50-100"
    F = "18-100"
    

    @classmethod
    def choices(cls):
        return tuple((status, status) for status in cls)

class CategoryEnum(str, Enum):
    VOLLEYBALL = "Volleyball"
    FOOTBALL = "Football"
    PADEL = "Padel"
    TENNIS = "Tennis"
    WEIGHTLIFTING = "Weightlifting"
    GAMING = "Gaming"
    NIGHTLIFE = "Nightlife"
    FOOD = "Food"
    

    @classmethod
    def choices(cls):
        return tuple((status, status) for status in cls)

class ParentCategoryEnum(str, Enum):
    SPORTS = "Sports"


    @classmethod
    def choices(cls):
        return tuple((status, status) for status in cls)


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(choices=CategoryEnum.choices())
    parent_category = models.CharField(choices=ParentCategoryEnum.choices(), blank=True, default=None)

    class Meta:
        db_table = "categories"


class Group(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=250)
    age_interval = models.CharField(choices=AgeIntervalEnum.choices())
    country = models.CharField(max_length=250, default="")
    city =  models.CharField(max_length=250, default="")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        db_table = "groups"


class Events(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=250)
    event_time = models.DateTimeField()
    country = models.CharField(max_length=250, default="")
    city =  models.CharField(max_length=250, default="")
    address = models.CharField(max_length=250)
    description = models.CharField(max_length=2000)
    max_num_participants = models.PositiveIntegerField()
    group = models.ForeignKey(Group, on_delete=models.CASCADE)

    
    class Meta:
        db_table = "events"




class GroupMembership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    joined_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "group_memberships"
        unique_together = ('user', 'group')

class EventRegistration(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    registered_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "event_registrations"
        unique_together = ('user', 'event')

class ChatMessage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=2000)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "chatmessages"




