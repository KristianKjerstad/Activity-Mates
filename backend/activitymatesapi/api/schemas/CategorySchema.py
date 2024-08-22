from ninja import ModelSchema

from api.models import Category

class CategorySchema(ModelSchema):
    class Meta:
        model = Category
        fields = ["id", "name", "parent_category"]