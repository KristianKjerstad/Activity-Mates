

#
#
#   Users 
#

from typing import List
from uuid import UUID

from ninja import Router
from api.schemas.UserSchema import CreateUserSchema, UserSchema
from api.services.UserService import UserService

router = Router()
user_service = UserService()

@router.get("/", response=List[UserSchema])
def get_all_users(request):
    users = user_service.get_all_users()
    return users


@router.get("/{id}", response=UserSchema)
def get_user(request, id: UUID):
    user: UserSchema = user_service.get_user(id=id)
    return user


@router.put("/{id}", response=UserSchema)
def update_user(request, id: UUID, user: UserSchema):
    user = user_service.update_user(id=id, new_user=user)
    return user


@router.post("/", response=UserSchema)
def create_user(request, user: CreateUserSchema):
    new_user = user_service.create_user(new_user=user)
    return new_user

@router.delete("/{id}", response=UserSchema)
def delete_user(request, id: UUID):
    user = user_service.delete_user(id=id)
    return user
