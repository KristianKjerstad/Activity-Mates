

from uuid import UUID
from api.repositories.CategoryRepository import CategoryRepository
from api.schemas.CategorySchema import CreateCategorySchema, CategorySchema


class CategoryService():


    category_repository = CategoryRepository()


    def get_all_categories(self):
        all_categorys = self.category_repository.get_all()
        return all_categorys
    
    def get_category(self, id: UUID) -> CategorySchema:
        category = self.category_repository.get(id=id)
        return category
    
    def delete_category(self, id: UUID):
        category = self.category_repository.delete(id=id)

    def create_category(self, new_category: CreateCategorySchema) -> CategorySchema:
        category = self.category_repository.create(new_category=new_category)
        return category
    
    def update_category(self, id: UUID, new_category: CategorySchema):
        new_category = self.category_repository.update(id=id, new_category=new_category)
        return new_category