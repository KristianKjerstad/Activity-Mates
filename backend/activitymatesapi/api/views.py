from re import U
from typing import List
from uuid import UUID

# Create your views here.

from ninja import NinjaAPI
from api.schemas.GroupSchema import CreateGroupSchema, GroupSchema
from api.schemas.UserSchema import CreateUserSchema, UserSchema
from api.services.GroupService import GroupService
from api.services.UserService import UserService

api = NinjaAPI()


user_service = UserService()
group_service = GroupService()

#
#
#   Users 
#

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



#
#
#   Groups 
#
#


@api.get("/groups")
def get_all_groups(request):
    groups: list[GroupSchema] = group_service.get_all_groups()
    return groups


@api.get("/groups/{id}", response=GroupSchema)
def get_group(request, id: UUID) -> GroupSchema:
    group = group_service.get_group(id=id)
    return group


@api.put("/groups/{id}", response=GroupSchema)
def update_group(request, id: UUID, group: GroupSchema):
    group = group_service.update_group(id=id, new_group=group)
    return group


@api.post("/groups", response=GroupSchema)
def create_group(request, group: CreateGroupSchema):
    new_group = group_service.create_group(new_group=group)
    return new_group

@api.delete("/group/{id}", response=GroupSchema)
def delete_group(request, id: UUID):
    group = group_service.delete_group(id=id)
    return group
