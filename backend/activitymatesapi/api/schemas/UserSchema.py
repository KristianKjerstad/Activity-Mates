
from api.models import User
from ninja import ModelSchema

class UserSchema(ModelSchema):
    class Meta:
        model = User
        fields = ["id", "full_name", "phone_number", "email", "country", "city", "date_of_birth", "groups", "events", "created_at", ]


class CreateUserSchema(ModelSchema):
    class Meta:
        model = User
        fields = ["full_name", "phone_number", "email", "country", "city", "date_of_birth"]