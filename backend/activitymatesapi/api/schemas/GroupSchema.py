
from enum import Enum
from api.models import AgeIntervalEnum, Group
from ninja import ModelSchema

from api.schemas.CategorySchema import CategorySchema

class GroupSchema(ModelSchema):
    category: CategorySchema  
    age_interval: AgeIntervalEnum
    class Meta:
        model = Group
        fields: list[str] = ["id", "name",  "country", "city", "category", "created_at"]


class CreateGroupSchema(ModelSchema):
    age_interval: AgeIntervalEnum
    category: CategorySchema  
    
    class Meta:
        model = Group
        fields = ["name", "country", "city"]