import string
from uuid import UUID
from ninja import ModelSchema

from api.models import Category

class CategorySchema(ModelSchema):
    id: UUID
    name: str
    parent_category: str


    class Meta:
        model = Category
        fields = ["id", "name", "parent_category"]
        

class CreateCategorySchema(ModelSchema):
    name: str
    parent_category: str

    class Meta:
        model = Category
        fields = [ "name", "parent_category"]
        