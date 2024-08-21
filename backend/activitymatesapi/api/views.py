from re import U
from typing import List
from uuid import UUID

# Create your views here.

from ninja import NinjaAPI
from api.schemas.UserSchema import CreateUserSchema, UserSchema
from api.services.UserService import UserService

api = NinjaAPI()


user_service = UserService()

@api.get("/users", response=List[UserSchema])
def get_all_users(request):
    users = user_service.get_all_users()
    return users


@api.get("/users/{id}", response=UserSchema)
def get_user(request, id: UUID):
    user = user_service.get_user(id=id)
    return user


@api.put("/users/{id}", response=UserSchema)
def update_user(request, id: UUID, user: UserSchema):
    user = user_service.update_user(id=id, new_user=user)
    return user


@api.post("/users", response=UserSchema)
def create_user(request, user: CreateUserSchema):
    new_user = user_service.create_user(new_user=user)
    return new_user

@api.delete("/users/{id}", response=UserSchema)
def delete_user(request, id: UUID):
    user = user_service.delete_user(id=id)
    return user



