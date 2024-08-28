
import string
from typing import List
from uuid import UUID
from api.models import User
from ninja import ModelSchema

class UserSchema(ModelSchema):
    groups: List[UUID]
    events: List[UUID]
    id: UUID
    full_name: str
    phone_number: str
    email: str
    country: str
    city: str

    
    class Meta:
        model = User
        fields = ["id", "full_name", "phone_number", "email", "country", "city", "date_of_birth", "created_at" ]

    @staticmethod
    def from_model(user: User):
        return UserSchema(
            id=user.id,
            full_name=user.full_name,
            phone_number=user.phone_number,
            email=user.email,
            country=user.country,
            city=user.city,
            date_of_birth=str(user.date_of_birth),
            groups=[group.id for group in user.groups.all()],
            events=[event.id for event in user.events.all()],
            created_at=user.created_at.isoformat(),
        )

class CreateUserSchema(ModelSchema):
    groups: List[UUID]
    events: List[UUID]
    id: UUID
    full_name: str
    phone_number: str
    email: str
    country: str
    city: str
    class Meta:
        model = User
        fields = ["full_name", "phone_number", "email", "country", "city", "date_of_birth"]