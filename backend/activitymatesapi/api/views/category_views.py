from uuid import UUID

from ninja import Router
from api.schemas.CategorySchema import CategorySchema, CreateCategorySchema
from api.services.CategoryService import CategoryService



category_service = CategoryService()

router = Router()


@router.get("/")
def get_all_categories(request) -> list[CategorySchema]:
    categories: list[CategorySchema] = category_service.get_all_categories()
    return categories


@router.get("/{id}", response=CategorySchema)
def get_category(request, id: UUID) -> CategorySchema:
    category = category_service.get_category(id=id)
    return category


@router.put("/{id}", response=CategorySchema)
def update_category(request, id: UUID, category: CategorySchema):
    category = category_service.update_category(id=id, new_category=category)
    return category


@router.post("/", response=CategorySchema)
def create_category(request, category: CreateCategorySchema):
    new_category = category_service.create_category(new_category=category)
    return new_category

@router.delete("/{id}", response=CategorySchema)
def delete_category(request, id: UUID):
    category = category_service.delete_category(id=id)
    return category
