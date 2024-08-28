

from unicodedata import category
from uuid import UUID

from django.shortcuts import get_object_or_404
from api.models import Category
from api.repositories.RepositoryInterface import Repository
from api.schemas.CategorySchema import CategorySchema, CreateCategorySchema


class CategoryRepository(Repository):

    def get_all(self) -> list[CategorySchema]:
        categories = Category.objects.all()
        return [CategorySchema.from_orm(category) for category in categories]
    
    def get(self, id: UUID) -> CategorySchema:
        category = get_object_or_404(Category, id=id)
        return CategorySchema.from_orm(category)
    

    def delete(self, id: UUID) -> None:
        category = get_object_or_404(Category, id=id)
        category.delete()


    def create(self, new_category: CreateCategorySchema) -> CategorySchema:
        category = Category.objects.create(
            name=new_category.name,
            parent_category=new_category.parent_category
        )
        return CategorySchema.from_orm(category)


    def update(self, id: UUID, new_category: CategorySchema) -> CategorySchema:
        category = get_object_or_404(Category, id=id)
        category.name = new_category.name
        category.parent_category = new_category.parent_category
        category.save()
        return CategorySchema.from_orm(category)


