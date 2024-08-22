
from api.models import Group
from ninja import ModelSchema

from api.schemas.CategorySchema import CategorySchema

class GroupSchema(ModelSchema):
    category: CategorySchema  
    class Meta:
        model = Group
        fields: list[str] = ["id", "name", "age_interval", "country", "city", "category", "created_at"]


class CreateGroupSchema(ModelSchema):
    class Meta:
        model = Group
        fields = ["name", "age_interval", "country", "city"]