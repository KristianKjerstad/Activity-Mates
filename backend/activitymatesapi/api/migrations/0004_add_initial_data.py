from django.db import migrations, models
import uuid

from api.models import AgeIntervalEnum

def add_initial_data(apps, schema_editor):
    # Get models
    Category = apps.get_model('api', 'Category')
    Group = apps.get_model('api', 'Group')
    Events = apps.get_model('api', 'Events')
    User = apps.get_model('api', 'User')
    GroupMembership = apps.get_model('api', 'GroupMembership')
    EventRegistration = apps.get_model('api', 'EventRegistration')

    # Add categories
    volleyball_category = Category.objects.create(id=uuid.uuid4(), name="Volleyball", parent_category="Sports")
    football_category = Category.objects.create(id=uuid.uuid4(), name="Football", parent_category="Sports")

    # Add groups
    volleyball_group = Group.objects.create(
        id=uuid.uuid4(),
        name="Volleyball Lovers",
        age_interval=AgeIntervalEnum.C,
        country="USA",
        city="New York",
        category=volleyball_category
    )

    football_group = Group.objects.create(
        id=uuid.uuid4(),
        name="Football Fans",
        age_interval=AgeIntervalEnum.B,
        country="USA",
        city="Los Angeles",
        category=football_category
    )

    # Add events
    volleyball_event = Events.objects.create(
        id=uuid.uuid4(),
        name="Summer Volleyball Tournament",
        event_time="2024-09-01 10:00:00",
        country="USA",
        city="New York",
        address="Central Park",
        description="A friendly volleyball tournament open to all skill levels.",
        max_num_participants=100,
        group=volleyball_group
    )

    football_event = Events.objects.create(
        id=uuid.uuid4(),
        name="Football Meetup",
        event_time="2024-09-05 14:00:00",
        country="USA",
        city="Los Angeles",
        address="Griffith Park",
        description="Join us for a casual football game.",
        max_num_participants=50,
        group=football_group
    )

    # Add users
    user1 = User.objects.create(
        id=uuid.uuid4(),
        full_name="John Donut",
        phone_number="1234567890",
        email="john@example.com",
        country="Norway",
        city="Oslo",
        date_of_birth="1990-01-01"
    )

    user2 = User.objects.create(
        id=uuid.uuid4(),
        full_name="Jane Smith",
        phone_number="0987654321",
        email="jane@example.com",
        country="USA",
        city="Los Angeles",
        date_of_birth="1985-02-02"
    )

    # Add group memberships
    GroupMembership.objects.create(user=user1, group=volleyball_group)
    GroupMembership.objects.create(user=user2, group=football_group)

    # Add event registrations
    EventRegistration.objects.create(user=user1, event=volleyball_event)
    EventRegistration.objects.create(user=user2, event=football_event)

class Migration(migrations.Migration):
    dependencies = [
        ('api', '0003_alter_user_events_alter_user_groups'),
    ]

    operations = [
        migrations.RunPython(add_initial_data),
    ]